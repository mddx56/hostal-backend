import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerModule } from 'nestjs-pino';
import { AuthModule } from './modules/auth/auth.module';
import { CommentModule } from './modules/comment/comment.module';
import { DatabaseModule } from './modules/databases/databases.module';
import { DatabaseService } from './modules/databases/databases.service';
import { FeaturepropertyModule } from './modules/featureproperty/featureproperty.module';
import { ImagepropertyModule } from './modules/imageproperty/imageproperty.module';
import { AppLoggerModule } from './modules/logger/logger.module';
import { PropertyModule } from './modules/property/property.module';
import { TypepropertyModule } from './modules/typeproperty/typeproperty.module';
import { UserModule } from './modules/user/user.module';
import { ZoneModule } from './modules/zone/zone.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.dev.env', isGlobal: true }),
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
    MailerModule,
    LoggerModule,
    PropertyModule,
    ZoneModule,
    TypepropertyModule,
    FeaturepropertyModule,
    ImagepropertyModule,
    CommentModule,
  ],
  providers: [DatabaseService, { provide: APP_GUARD, useClass: ThrottlerGuard }],
})
export class AppModule { }