import { Controller, Get } from '@nestjs/common';
import { StatusService } from './status.service';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('status')
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  @Get()
  @ApiBearerAuth()
  async findAll() {
    return await this.statusService.findAll();
  }
}
