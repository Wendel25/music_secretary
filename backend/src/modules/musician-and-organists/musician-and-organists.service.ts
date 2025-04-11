import { Repository } from 'typeorm';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MusicianAndOrganistEntities } from 'src/common/entities/musician-and-organists/musician-and-organist.entity';
import { CreateMusicianAndOrganistDto } from 'src/common/dtos/musician-and-organists/create-musician-and-organist.dto';
import { UUID } from 'typeorm/driver/mongodb/bson.typings';

@Injectable()
export class MusicianAndOrganistsService {
  constructor(
    @InjectRepository(MusicianAndOrganistEntities)
    private musicianRepository: Repository<MusicianAndOrganistEntities>,
  ) { }
  
  async create(data: CreateMusicianAndOrganistDto) {
    try {
      return await this.musicianRepository.save({
        ...data,
        id_church: { id: data.id_church },
        id_ministry: { id: data.id_ministry },
        id_instrument: { id: data.id_instrument },
        id_status: { id: data.id_status },
      });
    } catch (error) {
      throw new BadRequestException('Falha ao salvar o músico ou organista.');
    }
  }

  async findAll(id_city?: string) {
    return await this.musicianRepository.find({
      relations: ['id_church', 'id_church.id_city', 'id_ministry', 'id_instrument', 'id_instrument.id_category', 'id_status'],
      where: id_city ? { id_church: { id_city: { id: id_city } } } : {},
    });
  }

  async findAllMusician(id_city?: string) {
    const listUser = await this.findAll(id_city);

    const filteredList = listUser.filter(user =>
      ['Músico', 'Encarregado - Local', 'Encarregado - Regional', 'Músico - Instrutor'].includes(user.id_ministry.value)
    );

    return filteredList;
  }

  async findAllOrganists(id_city?: string) {
    const listUser = await this.findAll(id_city);

    const filteredList = listUser.filter(user =>
      ['Organista', 'Organista - Instrutora'].includes(user.id_ministry.value)
    );

    return filteredList;
  }

  async updatData(id: string, data: CreateMusicianAndOrganistDto) {
    console.log(data);

    // return await this.musicianRepository.update(id, data);
  }

  async remove(id: string) {  
    return await this.musicianRepository.delete(id);
  }
}
