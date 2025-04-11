import { Controller, Get, Post, Body, Param, Delete, Query } from '@nestjs/common';
import { EssaysService } from './essays.service';
import { CreateEssayDto } from 'src/common/dtos/essays/create-essay.dto';
import { ApiBearerAuth, ApiQuery } from '@nestjs/swagger';

@Controller('essays')
export class EssaysController {
  constructor(private readonly essaysService: EssaysService) {}

  @Post()
  @ApiBearerAuth()
  async create(@Body() createEssayDto: CreateEssayDto) {
    return await this.essaysService.create(createEssayDto);
  }

  @Get()
  @ApiBearerAuth()
  async findAll() {
    return await this.essaysService.findAll();
  }

  @Get('responsives-essays')
  @ApiBearerAuth()
  @ApiQuery({ name: 'id_city', required: false })
  async listResponsiveEssays(@Query('id_city') id_city?: string) {
    return await this.essaysService.responsiveEssays();
  }

  @Delete(':id')
  @ApiBearerAuth()
  async remove(@Param('id') id: string) {
    return await this.essaysService.remove(+id);
  }
}
