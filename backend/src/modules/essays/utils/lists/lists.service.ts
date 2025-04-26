import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MinistryProfilesEntities } from 'src/common/entities/ministry_profiles/ministry-profiles.entity';
import { MusicianAndOrganistsService } from 'src/modules/musician-and-organists/musician-and-organists.service';

@Injectable()
export class ListResponsivesService {
    constructor(
        private musicianAndOrganistsService: MusicianAndOrganistsService,

        @InjectRepository(MinistryProfilesEntities)
        private ministryProfilesRepository: Repository<MinistryProfilesEntities>,
    ) { }
    
    public async listResponsives(id_city?: string) {
        const response = await this.musicianAndOrganistsService.findAllMusician(id_city);
        return response.filter((item) => item.id_ministry.value === 'Encarregado - Regional' || item.id_ministry.value === 'Encarregado - Local');
    }

    public async presentMinistries(id_city?: string) {
        return await this.ministryProfilesRepository.find({
            relations: ['id_church', 'id_church.id_city', 'id_ministry'],
            where: id_city ? { id_church: { id_city: { id: id_city } } } : {},
        });
    }
}
