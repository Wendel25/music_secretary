import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EssaysService } from './essays.service';
import { EssaysController } from './essays.controller';
import { ListResponsivesService } from './utils/lists/lists.service';
import { MusicianAndOrganistsService } from '../musician-and-organists/musician-and-organists.service';
import { MinistryProfilesEntities } from 'src/common/entities/ministry_profiles/ministry-profiles.entity';
import { MusicianAndOrganistEntities } from 'src/common/entities/musician-and-organists/musician-and-organist.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MusicianAndOrganistEntities, MinistryProfilesEntities])],
  controllers: [EssaysController],
  providers: [EssaysService, ListResponsivesService, MusicianAndOrganistsService],
})
export class EssaysModule {}
