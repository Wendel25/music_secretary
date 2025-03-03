import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { InstrumentEntity } from 'src/common/entities/instrument/instrument.entity';
import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateInstrumentDTO } from 'src/common/dtos/instrument/create-instrument.dto';
import { ListCategoryService } from './utils/list-category/list-category.service';
import { ListInstrumentService } from './utils/list-instrument/list-instrument.service';
import { CreateInstrumentService } from './utils/create-instrument/create-instrument.service';

@Injectable()
export class InstrumentService {
  constructor(
    @InjectRepository(InstrumentEntity)
    private instrumentRepository: Repository<InstrumentEntity>,

    private createInstrumentService: CreateInstrumentService,
    private listInstrumentService: ListInstrumentService,
    private listCategoryService: ListCategoryService
  ) { }
  
  async create(createInstrumentDto: CreateInstrumentDTO) {
    return await this.createInstrumentService.create(createInstrumentDto);
  }

  async findAll() {
    return await this.listInstrumentService.list();
  }

  async findCategory() {
    return await this.listCategoryService.list();
  }

  async remove(id: string) {
    const instrument = await this.instrumentRepository.findOne({ where: { id } });

    if (!instrument) {
      throw new BadRequestException('ID not found');
    }
    
    await this.instrumentRepository.remove(instrument);

    return;
  }
}
