import { Controller, Get, Post, Body, Param, Delete, Query } from '@nestjs/common';
import { ChurchService } from './church.service';
import { CreateChurchDto } from 'src/common/dtos/church/create-church.dto';

@Controller('church')
export class ChurchController {
  constructor(private readonly churchService: ChurchService) {}

  @Post()
  async create(@Body() createChurchDto: CreateChurchDto) {
    return await this.churchService.create(createChurchDto);
  }

  @Get()
  async findOne(@Query('city') city: string) {
    return await this.churchService.findChurchCity(city);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.churchService.remove(id);
  }
}
