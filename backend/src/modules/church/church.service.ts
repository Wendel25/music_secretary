import { Repository } from 'typeorm';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateChurchDto } from './dto/create-church.dto';
import { ChurchEntity } from 'src/modules/church/entities/church.entity';
import { ReturnChurchByCity } from './interface/get-by-city-church.interface';

@Injectable()
export class ChurchService {
  constructor(
    @InjectRepository(ChurchEntity)
    private churchRepository: Repository<ChurchEntity>
  ) { }
  
  async create(createChurchDto: CreateChurchDto) {
    const church = this.churchRepository.create(createChurchDto);
    return await this.churchRepository.save(church);
  }

  async findChurchCity(city: string): Promise<ReturnChurchByCity[]> {
    return await this.churchRepository.find({ where: { city: city } });
  }

  async remove(id: string) {
    const church = await this.churchRepository.findOne({ where: { id } });
    
    if (!church) {
      throw new BadRequestException('ID not found');
    }
    
    return await this.churchRepository.remove(church);
  }
}
