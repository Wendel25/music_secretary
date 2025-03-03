import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/common/entities/user/user.entity'; 
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class FailedAttemptsService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly usersRepository: Repository<UserEntity>
    ) { }
    
    public async failedAttempts(email: string) {
        const user = await this.getUser(email);

        await this.incrementFailedAttempts(user);

        if (this.shouldBlock(user.failed_attempts)) {
            await this.blockUser(email, user.failed_attempts + 1);
        }
    }

    private async getUser(email: string): Promise<UserEntity> {
        try {
            const user = await this.usersRepository.findOne({ where: { email } });

            if (!user) {
                throw new NotFoundException(`User not found`);
            }

            return user;
        } catch (error) {
            throw new BadRequestException(`An error occurred while searching for user`);
        }
    }

    private async incrementFailedAttempts(user: UserEntity) {
        await this.usersRepository.increment({ email: user.email }, 'failed_attempts', 1);
    }

    private shouldBlock(failedAttempts: number): boolean {
        return failedAttempts >= 4;
    }

    private async blockUser(email: string, failedAttempts: number) {
        const blockUntil = new Date();
        blockUntil.setHours(blockUntil.getHours() + 1);

        await this.usersRepository.update(
            { email },
            {
                blocked_at: blockUntil,
                failed_attempts: failedAttempts
            }
        );
    }
}
