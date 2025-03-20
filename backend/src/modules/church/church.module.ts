import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChurchService } from './church.service';
import { ChurchController } from './church.controller';
import { ChurchEntity } from 'src/common/entities/church/church.entity';
import { CitiesEntity } from 'src/common/entities/cities/cities.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ChurchEntity, CitiesEntity])],
  controllers: [ChurchController],
  providers: [ChurchService],
  exports: [ChurchService],
})
export class ChurchModule {}
