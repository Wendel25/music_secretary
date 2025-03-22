import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MinistriesEntity } from 'src/common/entities/ministries/ministries.entity';

@Injectable()
export class MinistryService {
  constructor(
    @InjectRepository(MinistriesEntity)
    private ministryRepository: Repository<MinistriesEntity>,
  ) { }
  
  async findAll() {
    const result = await this.ministryRepository.find();
    return result
      .filter(item => item.value !== "ADM")
      .filter(item => item.value !== "Cooperador de Jovens")
      .filter(item => item.value !== "Diácono")
      .filter(item => item.value !== "Cooperador do Ofício Ministerial");
  }
}
