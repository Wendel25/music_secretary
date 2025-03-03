import { Module } from '@nestjs/common';
import { DasboardService } from './dasboard.service';
import { DasboardController } from './dasboard.controller';

@Module({
  controllers: [DasboardController],
  providers: [DasboardService],
})
export class DasboardModule {}
