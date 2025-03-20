import { Repository } from 'typeorm';
import { isUUID } from 'class-validator';
import { InjectRepository } from '@nestjs/typeorm';
import { BadRequestException, Injectable } from '@nestjs/common';
import { ChurchEntity } from 'src/common/entities/church/church.entity';
import { CitiesEntity } from 'src/common/entities/cities/cities.entity';
import { CreateChurchDto } from 'src/common/dtos/church/create-church.dto';
import { ReturnChurchByCity } from 'src/interfaces/church/get-by-city-church.interface';

@Injectable()
export class ChurchService {
  constructor(
    @InjectRepository(ChurchEntity)
    private churchRepository: Repository<ChurchEntity>,

    @InjectRepository(CitiesEntity)
    private citiesRepository: Repository<CitiesEntity>,
  ) { }

  async create(createChurchDto: CreateChurchDto) {
    const { id_city } = createChurchDto;

    this.validateUUID(id_city);

    const city = await this.findCityById(id_city);

    const church = this.churchRepository.create({
      ...createChurchDto,
      id_city: city,
    });

    return await this.churchRepository.save(church);
  }

  async findChurchCity(id_city?: string): Promise<ReturnChurchByCity[]> {
    if (id_city) {
      this.validateUUID(id_city);
    }

    let churches: ChurchEntity[];

    if (id_city) {
      churches = await this.churchRepository.find({
        where: { id_city: { id: id_city } },
        relations: ['id_city'],
      });
    } else {
      churches = await this.churchRepository.find({
        relations: ['id_city'],
      });
    }

    return churches.map(church => ({
      id: church.id,
      name: church.name,
      created_at: church.created_at,
      city: {
        id: church.id_city.id,
        name: church.id_city.value,
        created_at: church.id_city.created_at,
      },
    }));
  }

  async remove(id: string) {
    this.validateUUID(id);

    const church = await this.churchRepository.findOne({ where: { id } });

    if (!church) {
      throw new BadRequestException('ID not found');
    }

    return await this.churchRepository.remove(church);
  }

  private validateUUID(id: string) {
    if (!isUUID(id)) {
      throw new BadRequestException('ID not valid');
    }
  }

  private async findCityById(id_city: string): Promise<CitiesEntity> {
    const city = await this.citiesRepository.findOne({ where: { id: id_city } });

    if (!city) {
      throw new BadRequestException('City not found');
    }

    return city;
  }
}
