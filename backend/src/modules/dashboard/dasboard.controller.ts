import { Controller, Get, Query } from '@nestjs/common';
import { DasboardService } from './dasboard.service';
import { ApiBearerAuth, ApiQuery } from '@nestjs/swagger';

@Controller('dasboard')
export class DasboardController {
  constructor(private readonly dasboardService: DasboardService) {}

  @Get()
  @ApiBearerAuth()
  @ApiQuery({ name: 'city', required: false })
  async findAllDashboard(@Query('city') city?: string) {
    return await this.dasboardService.findAllDashboard(city);
  }
}
