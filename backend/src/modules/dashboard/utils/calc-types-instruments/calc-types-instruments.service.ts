import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BadRequestException, Injectable } from '@nestjs/common';
import { UserEntity } from 'src/common/entities/user/user.entity';
import { CategoryEntity } from 'src/common/entities/category/category.entity';
import { InstrumentEntity } from 'src/common/entities/instrument/instrument.entity';

@Injectable()
export class CalcTypesInstrumentsService {
    constructor(
        @InjectRepository(InstrumentEntity)
        private instrumentRepository: Repository<InstrumentEntity>,

        @InjectRepository(CategoryEntity)
        private categoryRepository: Repository<CategoryEntity>
    ) { }

    public async calcTypes(all: UserEntity[]) {
        const categoryCounts: { [categoryName: string]: number } = {
            'Cordas': 0,
            'Metais': 0,
            'Madeiras': 0,
        };
        let totalInstruments = 0;

        for (const user of all) {
            if (user.id_instrument && user.id_instrument.value !== 'Órgão') {
                const instrumentValue = user.id_instrument.value;

                try {
                    const instrument = await this.instrumentRepository.findOne({
                        where: { value: instrumentValue },
                        relations: ['id_category'],
                    });

                    if (!instrument || !instrument.id_category) {
                        throw new BadRequestException(`Instrumento: ${instrumentValue} não encontrado ou categoria não definida.`);
                    }

                    const category = await this.getCategoryByInstrument(instrument.id_category.id);
                    if (categoryCounts.hasOwnProperty(category.value)) {
                        categoryCounts[category.value]++;
                        totalInstruments++;
                    }

                } catch (error) {
                    throw new BadRequestException(`Erro ao buscar instrumento ${instrumentValue}: ${error.message}`);
                }
            }
        }

        const categoryPercentages: { [categoryName: string]: number } = {};
        for (const categoryName in categoryCounts) {
            categoryPercentages[categoryName] = totalInstruments > 0
                ? parseFloat(((categoryCounts[categoryName] / totalInstruments) * 100).toFixed())
                : 0;
        }

        return categoryPercentages;
    }

    private async getCategoryByInstrument(id_category: string): Promise<CategoryEntity> {
        const category = await this.categoryRepository.findOne({
            where: { id: id_category },
        });

        if (!category) {
            throw new BadRequestException(`Categoria com ID: ${id_category} não encontrada.`);
        }

        return category;
    }
}