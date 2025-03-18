import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { UserEntity } from 'src/common/entities/user/user.entity'; 

@Injectable()
export class LoginSuccessService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly usersRepository: Repository<UserEntity>,

        private readonly jwtService: JwtService
    ) { }

    public async success(email: string) {
        const user = await this.getUser(email);
        await this.resetFailedAttempts(user);
        return await this.generateJWTToken(user);
    }

    private async getUser(email: string): Promise<UserEntity> {
        try {
            return await this.usersRepository.findOneOrFail(
                {
                    where: { email },
                    relations: ['id_church', 'id_ministry', 'id_instrument', 'id_status']
                });
        } catch (error) {
            throw new NotFoundException(`User not found`);
        }
    }

    private async resetFailedAttempts(user: UserEntity) {
        await this.usersRepository.update(
            { email: user.email },
            {
                failed_attempts: 0,
                last_login_at: new Date(),
                blocked_at: null,
                first_access_at: user.first_access_at? user.first_access_at : new Date(),
            }
        );
    }

    private async generateJWTToken(user: UserEntity) {
        const payload = {
            id: user.id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            city: user.id_church.city,
            church: user.id_church.name,
            ministry: user.id_ministry.value,
            instrument: user.id_instrument?.value,
            status: user.id_status?.value,
            last_login_at: user.last_login_at,
            first_access_at: user.first_access_at,
            password_changed_at: user.password_changed_at,
            created_at: user.created_at,
        };

        const token = this.jwtService.sign(payload);
        return { token };
    }
}
