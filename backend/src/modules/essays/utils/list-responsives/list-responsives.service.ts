import { Injectable } from '@nestjs/common';
import { MusicianAndOrganistsService } from 'src/modules/musician-and-organists/musician-and-organists.service';

@Injectable()
export class ListResponsivesService {
    constructor(private musicianAndOrganistsService: MusicianAndOrganistsService) { }
    
    public async listResponsives(id_city?: string) {
        const response = await this.musicianAndOrganistsService.findAllMusician(id_city);
        return response.filter((item) => item.id_ministry.value === 'Encarregado - Regional' || item.id_ministry.value === 'Encarregado - Local');
    }
}
