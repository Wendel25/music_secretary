import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER } from 'src/config/consts/consts';

import { UserModule } from 'src/modules/user/user.module';
import { ChurchModule } from 'src/modules/church/church.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: DB_HOST,
      port: 3306,
      username: DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UserModule,
    ChurchModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
