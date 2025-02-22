import { Controller, Get, Post, Body,  Param, Delete } from '@nestjs/common';
import { InstrumentService } from './instrument.service';
import { CreateInstrumentDTO } from './dto/create-instrument.dto';

@Controller('instrument')
export class InstrumentController {
  constructor(private readonly instrumentService: InstrumentService) {}

  @Post()
  async create(@Body() createInstrumentDto: CreateInstrumentDTO) {
    return await this.instrumentService.create(createInstrumentDto);
  }

  @Get()
  async findAll() {
    return await this.instrumentService.findAll();
  }

  @Get('category')
  async findAllCategory() {
    return await this.instrumentService.findCategory();
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.instrumentService.remove(id);
  }
}
