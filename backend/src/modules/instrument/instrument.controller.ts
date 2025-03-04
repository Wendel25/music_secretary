import { Controller, Get, Post, Body,  Param, Delete } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { InstrumentService } from './instrument.service';
import { CreateInstrumentDTO } from 'src/common/dtos/instrument/create-instrument.dto';

@Controller('instrument')
export class InstrumentController {
  constructor(private readonly instrumentService: InstrumentService) {}

  @Post()
  @ApiBearerAuth()
  async create(@Body() createInstrumentDto: CreateInstrumentDTO) {
    return await this.instrumentService.create(createInstrumentDto);
  }

  @Get()
  @ApiBearerAuth()
  async findAll() {
    return await this.instrumentService.findAll();
  }

  @Delete(':id')
  @ApiBearerAuth()
  async remove(@Param('id') id: string) {
    return await this.instrumentService.remove(id);
  }
}
