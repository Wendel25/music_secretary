import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from 'src/modules/instrument/entities/category.entity';
import { InstrumentEntity } from 'src/modules/instrument/entities/instrument.entity';

@Injectable()
export class ListCategoryService {
    constructor(
        @InjectRepository(InstrumentEntity)
        private instrumentRepository: Repository<InstrumentEntity>,

        @InjectRepository(CategoryEntity)
        private categoryRepository: Repository<CategoryEntity>
    ) { }

    public async list() {
        const instruments = await this.listInstrument();
        const categories = await this.listCategory();

        const totalInstruments = instruments.length;
        if (totalInstruments === 0) return [];

        const categoryCount = instruments.reduce((acc, instrument) => {
            const categoryId = instrument.id_category.id;
            acc[categoryId] = (acc[categoryId] || 0) + 1;
            return acc;
        }, {} as Record<string, number>);

        const categoryPercentage = categories.map(category => ({
            category: category.value,
            value: Math.round((categoryCount[category.id] || 0) / totalInstruments * 100)
        }));

        return categoryPercentage;
    }

    private async listInstrument() {
        return await this.instrumentRepository.find({ relations: ['id_category'] });
    }

    private async listCategory() {
        return await this.categoryRepository.find();
    }
}
