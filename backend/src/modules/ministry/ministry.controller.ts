import { Controller, Get } from '@nestjs/common';
import { MinistryService } from './ministry.service';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('ministry')
export class MinistryController {
  constructor(private readonly ministryService: MinistryService) {}

  @Get()
  @ApiBearerAuth()
  async findAll() {
    return await this.ministryService.findAll();
  }
}
