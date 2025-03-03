import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/common/entities/user/user.entity';
import { FetchDataByCityService } from './fetch-data-by-city.service';

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    providers: [FetchDataByCityService],
    exports: [FetchDataByCityService],
})
export class FetchDataByCityModule {}
