import { Controller, Get, Query } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { ApiBearerAuth, ApiQuery } from '@nestjs/swagger';

@Controller('dashboard')
export class DasboardController {
  constructor(private readonly dashboardervice: DashboardService) {}

  @Get()
  @ApiBearerAuth()
  @ApiQuery({ name: 'city', required: false })
  async findAllDashboard(@Query('city') city?: string) {
    return await this.dashboardervice.findAllDashboard(city);
  }
}
