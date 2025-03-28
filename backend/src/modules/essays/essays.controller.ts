import { Controller, Get, Post, Body,  Param, Delete } from '@nestjs/common';
import { EssaysService } from './essays.service';
import { CreateEssayDto } from 'src/common/dtos/essays/create-essay.dto';

@Controller('essays')
export class EssaysController {
  constructor(private readonly essaysService: EssaysService) {}

  @Post()
  create(@Body() createEssayDto: CreateEssayDto) {
    return this.essaysService.create(createEssayDto);
  }

  @Get()
  findAll() {
    return this.essaysService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.essaysService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.essaysService.remove(+id);
  }
}
