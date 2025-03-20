import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InstrumentEntity } from 'src/common/entities/instrument/instrument.entity';
import { MusicianAndOrganistEntities } from 'src/common/entities/musician-and-organists/musician-and-organist.entity';

@Injectable()
export class CalcTypesInstrumentsService {
    constructor(
        @InjectRepository(InstrumentEntity)
        private instrumentRepository: Repository<InstrumentEntity>,
    ) { }

    public async calcTypes(all: MusicianAndOrganistEntities[]) {
        const categoryCounts: { [categoryName: string]: number } = {
            'Cordas': 0,
            'Metais': 0,
            'Madeiras': 0,
        };

        let totalInstruments = 0;

        for (const user of all) {
            if (user.id_instrument.value === 'Órgão') {
                continue;
            }

            if (user.id_instrument) {
                const instrumentValue = user.id_instrument.value;

                try {
                    // Buscar instrumento com categoria
                    const instrument = await this.instrumentRepository.findOne({
                        where: { value: instrumentValue },
                        relations: ['id_category'],
                    });

                    if (!instrument || !instrument.id_category) {
                        throw new BadRequestException(`Instrumento: ${instrumentValue} não encontrado ou categoria não definida.`);
                    }

                    const category = instrument.id_category.value;

                    if (categoryCounts.hasOwnProperty(category)) {
                        categoryCounts[category]++;
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
                ? parseFloat(((categoryCounts[categoryName] / totalInstruments) * 100).toFixed(2))
                : 0;
        }

        return categoryPercentages;
    }
}
