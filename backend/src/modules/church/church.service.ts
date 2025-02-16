import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateChurchDto } from './dto/create-church.dto';
import { UpdateChurchDto } from './dto/update-church.dto';
import { ChurchEntity } from 'src/modules/church/entities/church.entity';

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

  findAll() {
    return `This action returns all church`;
  }

  update(id: number, updateChurchDto: UpdateChurchDto) {
    return `This action updates a #${id} church`;
  }

  remove(id: number) {
    return `This action removes a #${id} church`;
  }
}
