import * as bcrypt from 'bcrypt';
import { UserEntity } from 'src/common/entities/user/user.entity';  
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginSuccessService } from 'src/modules/login/utils/login-success/login-success.service';
import { FailedAttemptsService } from 'src/modules/login/utils/failed-attempts/failed-attempts.service';

const MSGERROR = 'Contact support for more details!';

@Injectable()
export class ValidationAccessService {
    constructor(
        private readonly loginSuccessService: LoginSuccessService,
        private readonly failedAttemptsService: FailedAttemptsService
    ) { }
    
    public async validationAccessUser(passwordInput: string, user: UserEntity) {
        this.userIsActive(user.active);
        this.userIsBlocked(user.blocked_at);

       return await this.checkPassword(passwordInput, user);
    }

    private userIsActive(active: boolean) {
        if (!active) {
            throw new UnauthorizedException(`User disabled ${MSGERROR}`);
        }
    }

    private userIsBlocked(blocked: Date | null) {
        if (blocked) {
            throw new UnauthorizedException(`Access blocked ${MSGERROR}`);
        }
    }

    private async checkPassword(passwordInput: string, user: UserEntity) {
        const { email, password_hash } = user;

        const isValidPassword = await bcrypt.compare(passwordInput, password_hash);

        if (isValidPassword) {
           return await this.loginSuccessService.success(email);
        } else {
            await this.failedAttemptsService.failedAttempts(email);
            throw new UnauthorizedException('Invalid credentials');
        }
    }
}