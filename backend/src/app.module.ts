import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { configDB } from 'src/config/db/config.db';

import { JwtAuthGuard } from 'src/auth/guards/auth.guard';

import { UserModule } from 'src/modules/user/user.module';
import { LoginModule } from 'src/modules/login/login.module';
import { ChurchModule } from 'src/modules/church/church.module';
import { InstrumentModule } from 'src/modules/instrument/instrument.module';
import { DasboardModule } from './modules/dasboard/dasboard.module';

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
    DasboardModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    }
  ],
})
export class AppModule {}
