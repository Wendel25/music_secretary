import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER } from 'src/config/consts/consts';

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
      entities: [__dirname + '/../**/*.entity.{ts,js}'],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
