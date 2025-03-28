import { Controller, Get, Post, Body, Param, Delete, UsePipes, ValidationPipe, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { CreateUserDto } from 'src/common/dtos/user/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiBearerAuth()
  @UsePipes(new ValidationPipe())
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto);
  }

  @Get()
  @ApiBearerAuth()
  @ApiQuery({ name: 'city', required: false })
  async findAll(@Query('city') city?: string) {
    return await this.userService.findAll(city);
  }

  @Get('find-unique')
  @ApiBearerAuth()
  @ApiQuery({ name: 'email' })
  async findUnique(@Query('email') email: string) {
    return await this.userService.findUnique(email);
  }

  @Delete(':id')
  @ApiBearerAuth()
  async remove(@Param('id') id: string) {
    return await this.userService.remove(id);
  }
}
