import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InstrumentEntity } from 'src/common/entities/instrument/instrument.entity';

@Injectable()
export class ListInstrumentService {
    constructor(
        @InjectRepository(InstrumentEntity)
        private instrumentRepository: Repository<InstrumentEntity>,
    ) { }
     
    public async list() {
        const instruments = await this.instrumentRepository.find({
            relations: ['id_category'],
        });

        return instruments.map((instrument) => ({
            id: instrument.id,
            value: instrument.value,
            category: instrument.id_category?.value,
        }));
    }
}
