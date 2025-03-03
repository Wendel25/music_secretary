import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/common/entities/user/user.entity';
import { CreateUserDto } from 'src/common/dtos/user/create-user.dto';
import { ListUsersService } from 'src/modules/user/utils/list-users/list-users.service';
import { UpdateUserService } from 'src/modules/user/utils/update-user/update-user.service';
import { DeleteUserService } from 'src/modules/user/utils/delete-user/delete-user.service';
import { CreateUserService } from 'src/modules/user/utils/create-user/create-user.service';

@Injectable()
export class UserService {
  constructor(
    private readonly createUserService: CreateUserService,
    private readonly listUsersService: ListUsersService,
    private readonly updateUserService: UpdateUserService,
    private readonly deleteUserService: DeleteUserService,
  ) { }

  async create(createUserDto: CreateUserDto) {
    return await this.createUserService.create(createUserDto)
  }

  async findAll(city?: string) {
    return await this.listUsersService.list(city);
  }

  async update(id: string, updateUserDto: UserEntity) {
    return await this.updateUserService.update(id, updateUserDto);
  }

  async remove(id: string) {
    return await this.deleteUserService.delete(id);
  }

}
