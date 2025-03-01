import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, QueryRunner, Repository } from 'typeorm';
import { BadRequestException, Injectable } from '@nestjs/common';
import { UserEntity } from 'src/modules/user/entities/user.entity';
import { CreateUserDto } from 'src/modules/user/dto/create-user.dto';
import { StatusEntity } from 'src/modules/user/entities/status.entity';
import { ChurchEntity } from 'src/modules/church/entities/church.entity';
import { MinistriesEntity } from 'src/modules/user/entities/ministries.entity';
import { InstrumentEntity } from 'src/modules/instrument/entities/instrument.entity';

@Injectable()
export class CreateUserService {
    constructor(
        private readonly dataSource: DataSource,

        @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>,
    ) { }

    public async create(createUserDto: CreateUserDto) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.startTransaction();

        try {
            const createUser = await this.createDataUser(createUserDto, queryRunner);
            const user = this.userRepository.create(createUser);

            await queryRunner.manager.save(user);
            await queryRunner.commitTransaction();

            const { password_hash, ...userWithoutPassword } = user;

            return userWithoutPassword;
        } catch (error) {
            await queryRunner.rollbackTransaction();

            if (error instanceof BadRequestException) {
                throw error;
            }

            throw new BadRequestException("Could not create user");
        } finally {
            await queryRunner.release();
        }
    }

    private async createDataUser(user: CreateUserDto, queryRunner: QueryRunner) {
        await this.findUser(user.email, queryRunner);

        const password = await this.criptoPassword();

        const [church, ministry, instrument, status] = await Promise.all([
            queryRunner.manager.findOne(ChurchEntity, { where: { id: user.id_church } }),
            queryRunner.manager.findOne(MinistriesEntity, { where: { id: user.id_ministry } }),
            queryRunner.manager.findOne(InstrumentEntity, { where: { id: user.id_instrument } }),
            queryRunner.manager.findOne(StatusEntity, { where: { id: user.id_status } }),
        ]);

        if (!church || !ministry || !instrument || !status) {
            throw new BadRequestException('One or more related entities not found');
        }

        return {
            ...user,
            password_hash: password,
            id_church: church,
            id_ministry: ministry,
            id_instrument: instrument,
            id_status: status,
        };
    }

    private async findUser(email: string, queryRunner: QueryRunner): Promise<UserEntity | null> {
        const response = await queryRunner.manager.findOne(UserEntity, { where: { email } });
        
        if (response) {
            throw new BadRequestException("Email already exists");
        };

        return null;
    }

    private async criptoPassword(): Promise<string> {
        const saltRounds = 10;
        const password = 'Mudar123@';

        try {
            return await bcrypt.hash(password, saltRounds);
        } catch (err) {
            throw new BadRequestException('Error while encrypting password');
        }
    }
}
