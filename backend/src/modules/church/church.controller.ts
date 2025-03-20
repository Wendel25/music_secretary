import { Controller, Get, Post, Body, Param, Delete, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { ChurchService } from './church.service';
import { CreateChurchDto } from 'src/common/dtos/church/create-church.dto';

@Controller('church')
export class ChurchController {
  constructor(private readonly churchService: ChurchService) {}

  @Post()
  @ApiBearerAuth()
  async create(@Body() createChurchDto: CreateChurchDto) {
    return await this.churchService.create(createChurchDto);
  }

  @Get()
  @ApiBearerAuth()
  @ApiQuery({ name: 'id_city', required: false })
  async findOne(@Query('id_city') id_city?: string) {
    return await this.churchService.findChurchCity(id_city);
  }

  @Delete(':id')
  @ApiBearerAuth()
  async remove(@Param('id') id: string) {
    return await this.churchService.remove(id);
  }
}
