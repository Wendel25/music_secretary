import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER } from 'src/config/consts/consts';
import { ChurchEntity } from 'src/modules/church/entities/church.entity';
import { CategoryEntity } from 'src/modules/instrument/entities/category.entity';
import { InstrumentEntity } from 'src/modules/instrument/entities/instrument.entity';

export const configDB = (): TypeOrmModuleOptions => ({
    type: 'mariadb',
    host: DB_HOST,
    port: 3306,
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    entities: [
        ChurchEntity,
        InstrumentEntity,
        CategoryEntity
    ],
    synchronize: false,
    logging: true,
});