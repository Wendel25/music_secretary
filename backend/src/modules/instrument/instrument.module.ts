import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstrumentService } from './instrument.service';
import { InstrumentController } from './instrument.controller';
import { InstrumentEntity } from './entities/instrument.entity';
import { CategoryEntity } from './entities/category.entity';
import { CreateInstrumentService } from './utils/create-instrument/create-instrument.service';
import { ListInstrumentService } from './utils/list-instrument/list-instrument.service';
import { ListCategoryService } from './utils/list-category/list-category.service';

@Module({
  imports: [TypeOrmModule.forFeature([InstrumentEntity, CategoryEntity])],
  controllers: [InstrumentController],
  providers: [InstrumentService, CreateInstrumentService, ListInstrumentService, ListCategoryService],
})
export class InstrumentModule {}
