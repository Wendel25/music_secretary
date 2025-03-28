import { Module } from '@nestjs/common';
import { EssaysService } from './essays.service';
import { EssaysController } from './essays.controller';

@Module({
  controllers: [EssaysController],
  providers: [EssaysService],
})
export class EssaysModule {}
