import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, Query } from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';
import { UserService } from './user.service';
import { UserEntity } from 'src/common/entities/user/user.entity';
import { CreateUserDto } from 'src/common/dtos/user/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto);
  }

  @Get()
  @ApiQuery({ name: 'city', required: false })
  async findAll(@Query('city') city?: string) {
    return await this.userService.findAll(city);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UserEntity) {
    return await this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.userService.remove(id);
  }
}
