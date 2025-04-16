import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MinistryService } from './ministry.service';
import { MinistryController } from './ministry.controller';
import { ChurchEntity } from 'src/common/entities/church/church.entity';
import { MinistriesEntity } from 'src/common/entities/ministries/ministries.entity';
import { CreateProfilesService } from './utils/create-profiles/create-profiles.service';
import { MinistryProfilesEntities } from 'src/common/entities/ministry_profiles/ministry-profiles.entity';

@Module({
  imports: [TypeOrmModule.forFeature([
    ChurchEntity,
    MinistriesEntity,
    MinistryProfilesEntities
  ])],
  controllers: [MinistryController],
  providers: [MinistryService, CreateProfilesService],
})
export class MinistryModule {}
