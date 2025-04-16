import { Not, Repository } from 'typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MinistriesEntity } from 'src/common/entities/ministries/ministries.entity';
import { CreateMinistryDTO } from 'src/common/dtos/ministry/create-ministry.dto';
import { CreateProfilesService } from './utils/create-profiles/create-profiles.service';
import { MinistryProfilesEntities } from 'src/common/entities/ministry_profiles/ministry-profiles.entity';

@Injectable()
export class MinistryService {
  constructor(
    @InjectRepository(MinistriesEntity)
    private ministryRepository: Repository<MinistriesEntity>,

    @InjectRepository(MinistryProfilesEntities)
    private ministryProfilesRepository: Repository<MinistryProfilesEntities>,

    private createProfilesService: CreateProfilesService
  ) { }
  
  async findAll() {
    const result = await this.ministryRepository.find();
    return result.filter(item => item.value !== "adm");
  }

  async listMinistryProfile() { }

  async create(createMinistryDTO: CreateMinistryDTO) {
    return await this.createProfilesService.createProfile(createMinistryDTO);
  }

  async updatData(id: string, data: CreateMinistryDTO) { }

  async remove(id: string) {
    const ministry = await this.ministryProfilesRepository.findOne({ where: { id } });

    if (!ministry) {
      throw new NotFoundException('Ministry not found');
    }

    return await this.ministryRepository.delete(id);
  }
}
