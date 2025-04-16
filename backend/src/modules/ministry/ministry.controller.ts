import { Controller, Get, Post, Body, Delete, Param, Patch } from '@nestjs/common';
import { MinistryService } from './ministry.service';
import { ApiBearerAuth } from '@nestjs/swagger';
import { CreateMinistryDTO } from 'src/common/dtos/ministry/create-ministry.dto';

@Controller('ministry')
export class MinistryController {
  constructor(private readonly ministryService: MinistryService) {}

  @Get()
  @ApiBearerAuth()
  async findAll() {
    return await this.ministryService.findAll();
  }

  @Get('profiles')
  @ApiBearerAuth()
  async listMinistryProfiles() {
    return await this.ministryService.listMinistryProfile();
  }

  @Post('profiles')
  @ApiBearerAuth()
  async create(@Body() createMinistryDTO: CreateMinistryDTO) {
    return await this.ministryService.create(createMinistryDTO);
  }

  @Patch('profiles')
  @ApiBearerAuth()
  async update(@Param('id') id: string, @Body() data: CreateMinistryDTO) {
    return await this.ministryService.updatData(id, data);
  }

  @Delete('profiles/:id')
  @ApiBearerAuth()
  async remove(@Param('id') id: string) {
    return await this.ministryService.remove(id);
  }
}
