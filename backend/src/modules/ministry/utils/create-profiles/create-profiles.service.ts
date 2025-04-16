import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { ChurchEntity } from 'src/common/entities/church/church.entity';
import { CreateMinistryDTO } from 'src/common/dtos/ministry/create-ministry.dto';
import { MinistriesEntity } from 'src/common/entities/ministries/ministries.entity';
import { MinistryProfilesEntities } from 'src/common/entities/ministry_profiles/ministry-profiles.entity';

@Injectable()
export class CreateProfilesService {
    constructor(
        @InjectRepository(MinistriesEntity)
        private ministryRepository: Repository<MinistriesEntity>,

        @InjectRepository(MinistryProfilesEntities)
        private ministryProfilesRepository: Repository<MinistryProfilesEntities>,

        @InjectRepository(ChurchEntity)
        private churchRepository: Repository<ChurchEntity>,
    ) { }

    public async createProfile(data: CreateMinistryDTO) {
        const { id_church, id_ministry, name, phone } = data;

        await this.churchExists(id_church);
        await this.ministryExists(id_ministry);

        const ministryProfile = this.ministryProfilesRepository.create({
            name,
            phone,
            id_church: { id: id_church },
            id_ministry: { id: id_ministry },
        });
        
        return await this.ministryProfilesRepository.save(ministryProfile);
    }

    private async churchExists(id_church: string) {
        const church = await this.churchRepository.findOne({ where: { id: id_church } });

        if (!church) {
            throw new NotFoundException('Church not found');
        }

        return church;
    }

    private async ministryExists(id_ministry: string) {
        const ministry = await this.ministryRepository.findOne({ where: { id: id_ministry } });

        if (!ministry) {
            throw new NotFoundException('Ministry not found');
        }

        return ministry;
    }
}
