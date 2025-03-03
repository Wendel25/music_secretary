import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BadRequestException, Injectable } from '@nestjs/common';
import { UserEntity } from 'src/common/entities/user/user.entity';

@Injectable()
export class ListUsersService {
    constructor(
        @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>,
    ) { }

    public async list(city?: string): Promise<UserEntity[]> {
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
            throw new BadRequestException("Unable to list users");
        }
    }
}
