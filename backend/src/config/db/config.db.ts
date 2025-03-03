import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER } from 'src/config/consts/consts';

export const configDB = (): TypeOrmModuleOptions => ({
    type: 'mariadb',
    host: DB_HOST,
    port: 3306,
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    entities: [__dirname + '/../../**/*.entity{.ts,.js}'],
    synchronize: false,
    logging: true,
});