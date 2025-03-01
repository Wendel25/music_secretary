import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserService } from './utils/create-user/create-user.service';

@Injectable()
export class UserService {
  constructor(private readonly createUserService: CreateUserService) { }

  create(createUserDto: CreateUserDto) {
    return this.createUserService.create(createUserDto)
  }

  findAll() {
    return `This action returns all user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
