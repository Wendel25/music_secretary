import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MusicianAndOrganistEntities } from 'src/common/entities/musician-and-organists/musician-and-organist.entity';
import { CreateMusicianAndOrganistDto } from 'src/common/dtos/musician-and-organists/create-musician-and-organist.dto';

@Injectable()
export class MusicianAndOrganistsService {
  constructor(
    @InjectRepository(MusicianAndOrganistEntities)
    private musicianRepository: Repository<MusicianAndOrganistEntities>,
  ) { }
  
  async create(data: CreateMusicianAndOrganistDto) {
    return await this.musicianRepository.save({
      ...data,
      id_church: { id: data.id_church },
      id_ministry: { id: data.id_ministry },
      id_instrument: { id: data.id_instrument },
      id_status: { id: data.id_status },
    });
  }

  async findAll() {
    return await `This action returns all musicianAndOrganists`;
  }

  async findOne(id: number) {
    return await  `This action returns a #${id} musicianAndOrganist`;
  }

  async remove(id: number) {
    return await `This action removes a #${id} musicianAndOrganist`;
  }
}
