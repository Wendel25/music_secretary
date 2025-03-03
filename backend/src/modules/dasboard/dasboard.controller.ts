import { Controller, Get } from '@nestjs/common';
import { DasboardService } from './dasboard.service';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('dasboard')
export class DasboardController {
  constructor(private readonly dasboardService: DasboardService) {}

  @Get()
  @ApiBearerAuth()
  findAll() {
    return this.dasboardService.findAll();
  }
}
