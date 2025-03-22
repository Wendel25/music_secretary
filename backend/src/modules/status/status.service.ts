import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StatusEntity } from 'src/common/entities/status/status.entity';

@Injectable()
export class StatusService {
  constructor(
    @InjectRepository(StatusEntity)
    private statusRepository: Repository<StatusEntity>,
  ) { }
  
  async findAll() {
    return await this.statusRepository.find();
  }
}
