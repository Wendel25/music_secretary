import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UpdatePasswordService } from './update-password.service';
import { UserEntity } from 'src/common/entities/user/user.entity';
import { UpdatePasswordController } from './update-password.controller';
import { EncryptPasswordService } from 'src/utils/encrypt-password/encrypt-password.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UpdatePasswordController],
  providers: [UpdatePasswordService, EncryptPasswordService],
})
export class UpdatePasswordModule {}
