import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { configDB } from 'src/config/db/config.db';

import { JwtAuthGuard } from 'src/auth/guards/auth.guard';

import { EncryptPasswordService } from 'src/utils/encrypt-password/encrypt-password.service';
import { FetchDataByCityModule } from 'src/utils/fetch-data-by-city/fetch-data-by-city.module';

import { UserModule } from 'src/modules/user/user.module';
import { LoginModule } from 'src/modules/login/login.module';
import { ChurchModule } from 'src/modules/church/church.module';
import { EssaysModule } from 'src/modules/essays/essays.module';
import { StatusModule } from 'src/modules/status/status.module';
import { MinistryModule } from 'src/modules/ministry/ministry.module';
import { DasboardModule } from 'src/modules/dashboard/dashboard.module';
import { InstrumentModule } from 'src/modules/instrument/instrument.module';
import { UpdatePasswordModule } from 'src/modules/update-password/update-password.module';
import { MusicianAndOrganistsModule } from 'src/modules/musician-and-organists/musician-and-organists.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => configDB(configService),
      inject: [ConfigService],
    }),
    UserModule,
    ChurchModule,
    InstrumentModule,
    LoginModule,
    DasboardModule,
    FetchDataByCityModule,
    UpdatePasswordModule,
    MusicianAndOrganistsModule,
    MinistryModule,
    StatusModule,
    EssaysModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    EncryptPasswordService,
  ],
})
export class AppModule {}
