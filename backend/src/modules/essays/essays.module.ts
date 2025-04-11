import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EssaysService } from './essays.service';
import { EssaysController } from './essays.controller';
import { ListResponsivesService } from './utils/list-responsives/list-responsives.service';
import { MusicianAndOrganistEntities } from 'src/common/entities/musician-and-organists/musician-and-organist.entity';
import { MusicianAndOrganistsService } from '../musician-and-organists/musician-and-organists.service';

@Module({
  imports: [TypeOrmModule.forFeature([MusicianAndOrganistEntities])],
  controllers: [EssaysController],
  providers: [EssaysService, ListResponsivesService, MusicianAndOrganistsService],
})
export class EssaysModule {}
