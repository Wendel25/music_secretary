import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserModule } from 'src/modules/user/user.module';
import { ChurchModule } from 'src/modules/church/church.module';
import { configDB } from './config/db/config.db';
import { InstrumentModule } from './modules/instrument/instrument.module';
import { LoginModule } from './modules/login/login.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      useFactory: () => configDB(),
    }),
    UserModule,
    ChurchModule,
    InstrumentModule,
    LoginModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
