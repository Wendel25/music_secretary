import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserEntity } from 'src/modules/user/entities/user.entity';
import { StatusEntity } from 'src/modules/user/entities/status.entity';
import { CreateUserService } from './utils/create-user/create-user.service';
import { MinistriesEntity } from 'src/modules/user/entities/ministries.entity';
import { ChurchEntity } from '../church/entities/church.entity';
import { InstrumentEntity } from '../instrument/entities/instrument.entity';
import { ListUsersService } from './utils/list-users/list-users.service';
import { DeleteUserService } from './utils/delete-user/delete-user.service';
import { UpdateUserService } from './utils/update-user/update-user.service';

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