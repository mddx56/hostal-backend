import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerModule } from 'nestjs-pino';
import { AuthModule } from './modules/auth/auth.module';
import { DatabaseModule } from './modules/databases/databases.module';
import { DatabaseService } from './modules/databases/databases.service';
import { DiscountModule } from './modules/discount/discount.module';
import { FavoriteModule } from './modules/favorite/favorite.module';
import { FeaturepropertyModule } from './modules/featureproperty/featureproperty.module';
import { ImagepropertyModule } from './modules/imageproperty/imageproperty.module';
import { AppLoggerModule } from './modules/logger/logger.module';
import { PropertyModule } from './modules/property/property.module';
import { RatingModule } from './modules/ratings/rating.module';
import { TypepropertyModule } from './modules/typeproperty/typeproperty.module';
import { UserModule } from './modules/user/user.module';
import { ZoneModule } from './modules/zone/zone.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    TypeOrmModule.forRootAsync({ useClass: DatabaseService }),
    ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 30,
      },
    ]),
    UserModule,
    AppLoggerModule,
    DatabaseModule,
    AuthModule,
    LoggerModule,
    PropertyModule,
    ZoneModule,
    TypepropertyModule,
    FeaturepropertyModule,
    ImagepropertyModule,
    FavoriteModule,
    RatingModule,
    DiscountModule
  ],
  providers: [DatabaseService, { provide: APP_GUARD, useClass: ThrottlerGuard }],
})
export class AppModule { }
