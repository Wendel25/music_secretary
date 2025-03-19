import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BadRequestException, Injectable } from '@nestjs/common';
import { UserEntity } from 'src/common/entities/user/user.entity';

@Injectable()
export class FetchDataByCityService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>
    ) { }

    public async findAll(city?: string) {
        try {
            const queryBuilder = this.userRepository.createQueryBuilder('user')
            .leftJoinAndSelect('user.id_church', 'church')
            .leftJoinAndSelect('user.id_ministry', 'ministry')
            .leftJoinAndSelect('user.id_instrument', 'instrument')
            .leftJoinAndSelect('user.id_status', 'status');

            if (city) {
                queryBuilder.andWhere('church.city = :city', { city });
            }

            return await queryBuilder.getMany();
        } catch (error) {
            throw new BadRequestException('An error occurred while fetching the requested data');
        }
    }

    public async findUnique(email: string) {
        try {
            const user = await this.userRepository.findOne({
                where: { email },
                relations: ['id_church', 'id_ministry', 'id_instrument', 'id_status'],
            });

            if (!user) throw new BadRequestException('User not found');

            const { password_hash, ...userWithoutPassword } = user;
            return userWithoutPassword;
        } catch (error) {
            throw new BadRequestException('An error occurred while fetching the requested data');
        }
    }

}
