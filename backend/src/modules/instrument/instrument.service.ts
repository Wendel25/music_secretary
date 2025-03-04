import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InstrumentEntity } from 'src/common/entities/instrument/instrument.entity';
import { CreateInstrumentDTO } from 'src/common/dtos/instrument/create-instrument.dto';
import { ListInstrumentService } from './utils/list-instrument/list-instrument.service';
import { CreateInstrumentService } from './utils/create-instrument/create-instrument.service';

@Injectable()
export class InstrumentService {
  constructor(
    @InjectRepository(InstrumentEntity)
    private instrumentRepository: Repository<InstrumentEntity>,

    private createInstrumentService: CreateInstrumentService,
    private listInstrumentService: ListInstrumentService,
  ) { }
  
  async create(createInstrumentDto: CreateInstrumentDTO) {
    return await this.createInstrumentService.create(createInstrumentDto);
  }

  async findAll() {
    return await this.listInstrumentService.list();
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
