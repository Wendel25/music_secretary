import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserService } from './utils/create-user/create-user.service';
import { ListUsersService } from './utils/list-users/list-users.service';

@Injectable()
export class UserService {
  constructor(
    private readonly createUserService: CreateUserService,
    private readonly listUsersService: ListUsersService,
  ) { }

  async create(createUserDto: CreateUserDto) {
    return await this.createUserService.create(createUserDto)
  }

  async findAll(city?: string) {
    return await this.listUsersService.list(city);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await `This action updates a #${id} user`;
  }

  async remove(id: number) {
    return await `This action removes a #${id} user`;
  }
}
