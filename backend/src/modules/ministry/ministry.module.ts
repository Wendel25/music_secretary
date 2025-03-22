import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MinistryService } from './ministry.service';
import { MinistryController } from './ministry.controller';
import { MinistriesEntity } from 'src/common/entities/ministries/ministries.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MinistriesEntity])],
  controllers: [MinistryController],
  providers: [MinistryService],
})
export class MinistryModule {}
