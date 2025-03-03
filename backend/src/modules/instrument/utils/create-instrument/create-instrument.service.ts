import { Repository } from 'typeorm';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from 'src/common/entities/category/category.entity';
import { InstrumentEntity } from 'src/common/entities/instrument/instrument.entity';
import { CreateInstrumentDTO } from 'src/common/dtos/instrument/create-instrument.dto';

@Injectable()
export class CreateInstrumentService {
    constructor(
        @InjectRepository(CategoryEntity)
        private categoryRepository: Repository<CategoryEntity>,

        @InjectRepository(InstrumentEntity)
        private instrumentRepository: Repository<InstrumentEntity>
    ) { }
 
    public async create(createInstrumentDto: CreateInstrumentDTO) {
        const category = await this.validateCategory(createInstrumentDto.id_category);

        const instrument = this.instrumentRepository.create({
            value: createInstrumentDto.value,
            id_category: category, 
        });

        await this.instrumentRepository.save(instrument);

        return;
    }

    private async validateCategory(id_category: string) {
        const category = await this.categoryRepository.findOneBy({
            id: id_category,
        });

        if (!category) {
            throw new BadRequestException('Invalid category ID');
        }

        return category;
    }
}
