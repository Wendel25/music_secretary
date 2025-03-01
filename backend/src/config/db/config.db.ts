import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UserEntity } from 'src/modules/user/entities/user.entity';
import { StatusEntity } from 'src/modules/user/entities/status.entity';
import { ChurchEntity } from 'src/modules/church/entities/church.entity';
import { MinistriesEntity } from 'src/modules/user/entities/ministries.entity';
import { CategoryEntity } from 'src/modules/instrument/entities/category.entity';
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER } from 'src/config/consts/consts';
import { InstrumentEntity } from 'src/modules/instrument/entities/instrument.entity';

export const configDB = (): TypeOrmModuleOptions => ({
    type: 'mariadb',
    host: DB_HOST,
    port: 3306,
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    entities: [
        UserEntity,
        StatusEntity,
        ChurchEntity,
        CategoryEntity,
        InstrumentEntity,
        MinistriesEntity,
    ],
    synchronize: false,
    logging: true,
});