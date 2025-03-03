import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UserEntity } from 'src/common/entities/user/user.entity';
import { StatusEntity } from 'src/common/entities/status/status.entity';
import { ChurchEntity } from 'src/common/entities/church/church.entity';
import { MinistriesEntity } from 'src/common/entities/ministries/ministries.entity';
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER } from 'src/config/consts/consts';
import { InstrumentEntity } from 'src/common/entities/instrument/instrument.entity';
import { CategoryEntity } from 'src/common/entities/category/category.entity';

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