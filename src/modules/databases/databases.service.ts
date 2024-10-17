import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { CommentEntity } from '../comment/entities/comment.entity';
import { ResponseCommentEntity } from '../comment/entities/reposnse.entiry';
import { FavoriteEntity } from '../favorite/favorite.entity';
import { FeatureEntity } from '../featureproperty/entities/feature.entity';
import { FeaturePropertyEntity } from '../featureproperty/entities/featureproperty.entity';
import { ImagepropertyEntity } from '../imageproperty/imageproperty.entity';
import { PropertyEntity } from '../property/property.entity';
import { RatingEntity } from '../ratings/rating.entity';
import { TypePropertyEntity } from '../typeproperty/typeproperty.entity';
import { UserEntity } from '../user/user.entity';
import { ZoneEntity } from '../zone/zone.entity';
import { DiscountEntity } from '../discount/discount.entity';

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
      entities: [UserEntity, FeatureEntity, FeaturePropertyEntity, ImagepropertyEntity, TypePropertyEntity, PropertyEntity, ZoneEntity, CommentEntity, ResponseCommentEntity, FavoriteEntity, RatingEntity, DiscountEntity],
      logging: ['error', 'warn', 'info', 'query'],
    };
  }
}
