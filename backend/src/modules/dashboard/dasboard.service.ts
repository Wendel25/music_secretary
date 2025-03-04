import { Injectable } from '@nestjs/common';
import { FetchDataByCityService } from 'src/utils/fetch-data-by-city/fetch-data-by-city.service';
import { CalcAmountMusicianService } from 'src/modules/dashboard/utils/calc-amount-musician/calc-amount-musician.service';
import { CalcTypesInstrumentsService } from 'src/modules/dashboard/utils/calc-types-instruments/calc-types-instruments.service';

@Injectable()
export class DasboardService {
  constructor(
    private readonly fetchDataByCityService: FetchDataByCityService,
    private readonly calcAmountMusicianService: CalcAmountMusicianService,
    private readonly calcTypesInstrumentsService: CalcTypesInstrumentsService,
  ) { }

  public async findAllDashboard(city?: string) {
    const data = await this.fetchDataByCityService.data(city || '');
    const resultCalc = this.calcAmountMusicianService.calc(data);
    const resultCalcTypes = await this.calcTypesInstrumentsService.calcTypes(data);
    return {
      resultCalc,
      resultCalcTypes
    };
  }
}