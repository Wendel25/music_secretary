import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CitiesEntity } from 'src/common/entities/cities/cities.entity';
import { MusicianAndOrganistEntities } from 'src/common/entities/musician-and-organists/musician-and-organist.entity';
import { CalcAmountMusicianService } from 'src/modules/dashboard/utils/calc-amount-musician/calc-amount-musician.service';
import { CalcTypesInstrumentsService } from 'src/modules/dashboard/utils/calc-types-instruments/calc-types-instruments.service';

@Injectable()
export class DashboardService {
  constructor(
    @InjectRepository(MusicianAndOrganistEntities)
    private musicianRepository: Repository<MusicianAndOrganistEntities>,

    @InjectRepository(CitiesEntity)
    private citiesRepository: Repository<CitiesEntity>,

    private readonly calcAmountMusicianService: CalcAmountMusicianService,
    private readonly calcTypesInstrumentsService: CalcTypesInstrumentsService,
  ) { }

  public async findAllDashboard(city?: string) {
    const musiciansQuery = this.musicianRepository.createQueryBuilder('musician');

    musiciansQuery
      .leftJoinAndSelect('musician.id_church', 'church')
      .leftJoinAndSelect('church.id_city', 'city')
      .leftJoinAndSelect('musician.id_ministry', 'ministry')
      .leftJoinAndSelect('musician.id_instrument', 'instrument')
      .leftJoinAndSelect('instrument.id_category', 'categories')
      .leftJoinAndSelect('musician.id_status', 'status');

    if (city) {
      const cityRecord = await this.citiesRepository.findOne({ where: { value: city } });

      if (cityRecord) {
        musiciansQuery.where('church.id_city = :cityId', { cityId: cityRecord.id });
      } else {
        throw new Error(`Cidade ${city} não encontrada.`);
      }
    }


    const musicians = await musiciansQuery.getMany();
    const resultData = this.calcAmountMusicianService.calc(musicians);
    const secondResultData = await this.calcTypesInstrumentsService.calcTypes(musicians);

    return { resultData, secondResultData }
  }
}
