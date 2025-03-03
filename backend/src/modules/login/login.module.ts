import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { LoginService } from './login.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginController } from './login.controller';
import { UserEntity } from 'src/common/entities/user/user.entity';
import { LoginSuccessService } from './utils/login-success/login-success.service';
import { ValidationAccessService } from 'src/modules/login/utils/validation-access/validation-access.service';
import { FailedAttemptsService } from './utils/failed-attempts/failed-attempts.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: process.env.JWT_SECRET || '',
        signOptions: { expiresIn: '8h' },
      }),
    }),
  ],
  controllers: [LoginController],
  providers: [LoginService, ValidationAccessService, LoginSuccessService, FailedAttemptsService],
})
export class LoginModule {}
