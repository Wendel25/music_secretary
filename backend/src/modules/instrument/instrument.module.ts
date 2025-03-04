import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstrumentService } from './instrument.service';
import { InstrumentController } from './instrument.controller';
import { CategoryEntity } from 'src/common/entities/category/category.entity';
import { InstrumentEntity } from 'src/common/entities/instrument/instrument.entity';
import { ListInstrumentService } from 'src/modules/instrument/utils/list-instrument/list-instrument.service';
import { CreateInstrumentService } from 'src/modules/instrument/utils/create-instrument/create-instrument.service';

@Module({
  imports: [TypeOrmModule.forFeature([InstrumentEntity, CategoryEntity])],
  controllers: [InstrumentController],
  providers: [InstrumentService, CreateInstrumentService, ListInstrumentService],
})
export class InstrumentModule {}
