import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserEntity } from 'src/common/entities/user/user.entity';
import { StatusEntity } from 'src/common/entities/status/status.entity';
import { ChurchEntity } from 'src/common/entities/church/church.entity';
import { MinistriesEntity } from 'src/common/entities/ministries/ministries.entity';
import { InstrumentEntity } from 'src/common/entities/instrument/instrument.entity';
import { ListUsersService } from 'src/modules/user/utils/list-users/list-users.service';
import { CreateUserService } from 'src/modules/user/utils/create-user/create-user.service';
import { DeleteUserService } from 'src/modules/user/utils/delete-user/delete-user.service';
import { UpdateUserService } from 'src/modules/user/utils/update-user/update-user.service';

@Module({
  imports: [TypeOrmModule.forFeature([
    UserEntity,
    StatusEntity,
    ChurchEntity,
    MinistriesEntity,
    InstrumentEntity,
  ])],
  controllers: [UserController],
  providers: [UserService, CreateUserService, ListUsersService, DeleteUserService, UpdateUserService],
})
export class UserModule { }