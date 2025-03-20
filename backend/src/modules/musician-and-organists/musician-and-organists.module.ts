import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MusicianAndOrganistsService } from './musician-and-organists.service';
import { MusicianAndOrganistsController } from './musician-and-organists.controller';
import { MusicianAndOrganistEntities } from 'src/common/entities/musician-and-organists/musician-and-organist.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MusicianAndOrganistEntities])],
  controllers: [MusicianAndOrganistsController],
  providers: [MusicianAndOrganistsService],
})
export class MusicianAndOrganistsModule {}
