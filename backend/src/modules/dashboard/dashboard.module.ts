import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DashboardService } from './dashboard.service';
import { DasboardController } from './dashboard.controller';
import { UserEntity } from 'src/common/entities/user/user.entity';
import { CategoryEntity } from 'src/common/entities/category/category.entity';
import { InstrumentEntity } from 'src/common/entities/instrument/instrument.entity';
import { FetchDataByCityService } from 'src/utils/fetch-data-by-city/fetch-data-by-city.service';
import { CalcAmountMusicianService } from 'src/modules/dashboard/utils/calc-amount-musician/calc-amount-musician.service';
import { CalcTypesInstrumentsService } from 'src/modules/dashboard/utils/calc-types-instruments/calc-types-instruments.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, InstrumentEntity, CategoryEntity])],
  controllers: [DasboardController],
  providers: [
    DashboardService,
    FetchDataByCityService,
    CalcAmountMusicianService,
    CalcTypesInstrumentsService
  ],
})
export class DasboardModule {}
