import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BadRequestException, Injectable } from '@nestjs/common';
import { UserEntity } from 'src/common/entities/user/user.entity';

@Injectable()
export class FetchDataByCityService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>,
    ) { }

    public async findAll(city?: string) {
        try {
            const query = this.userRepository.createQueryBuilder('user')
                .leftJoinAndSelect('user.id_church', 'church')
                .leftJoinAndSelect('church.id_city', 'city')
                .leftJoinAndSelect('user.id_ministry', 'ministry')
                .select([
                    'user.id', 'user.name', 'user.email', 'user.phone', 'user.first_access_at',
                    'user.password_changed_at', 'user.last_login_at', 'user.failed_attempts',
                    'user.blocked_at', 'user.active', 'user.created_at',
                    'church.id', 'church.name', 'church.created_at',
                    'city.id', 'city.value', 'city.created_at',
                    'ministry.id', 'ministry.value', 'ministry.created_at',
                ]);

            if (city) {
                query.where('city.value = :cityName', { cityName: city });
            }

            const users = await query.getMany();
            return users;
        } catch (error) {
            throw new BadRequestException('An error occurred while fetching the requested data');
        }
    }

    public async findUnique(email: string) {
        try {
            const user = await this.userRepository.findOne({
                where: { email },
                relations: [
                    'id_church',
                    'id_church.id_city',
                    'id_ministry',
                ],
            });

            if (!user) throw new BadRequestException('User not found');

            const { password_hash, ...userWithoutPassword } = user;
            return userWithoutPassword;
        } catch (error) {
            throw new BadRequestException('An error occurred while fetching the requested data');
        }
    }
}
