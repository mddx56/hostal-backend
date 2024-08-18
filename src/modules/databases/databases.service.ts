import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { UserEntity } from '../user/user.entity';
import { FeaturePropertyEntity } from '../featureproperty/featureproperty.entity';
import { ImagepropertyEntity } from '../imageproperty/imageproperty.entity';
import { TypePropertyEntity } from '../typeproperty/typeproperty.entity';
import { PropertyEntity } from '../property/property.entity';
import { ZoneEntity } from '../zone/zone.entity';
import { CommentEntity } from '../comment/entities/comment.entity';
import { ResponseCommentEntity } from '../comment/entities/reposnse.entiry';

@Injectable()
export class DatabaseService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: process.env.HOST_DATABASE,
      port: parseInt(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.DATABASE,
      synchronize: true,
      entities: [UserEntity, FeaturePropertyEntity, ImagepropertyEntity, TypePropertyEntity, PropertyEntity, ZoneEntity,CommentEntity,ResponseCommentEntity],
      logging: ['error', 'warn', 'info', 'query'],
    };
  }
}
