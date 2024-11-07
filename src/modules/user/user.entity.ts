import { InternalServerErrorException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Exclude } from 'class-transformer';
import { BeforeInsert, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { CommentEntity } from '../comment/entities/comment.entity';
import { ResponseCommentEntity } from '../comment/entities/reposnse.entity';
import { FavoriteEntity } from '../favorite/favorite.entity';
import { RatingEntity } from '../ratings/rating.entity';
import { RoleEnum } from 'src/shared/interfaces/user.interface';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ unique: true })
  email: string;

  @Exclude()
  @Column()
  password: string;

  @Column()
  name: string;

  @Column({ type: 'enum', enum: RoleEnum, array: true })
  role: RoleEnum[];

  @Column({ name: 'photo_url' })
  photoUrl: string = '';

  @Column()
  provider: string;

  token?: string;
  refreshToken?: string;

  @CreateDateColumn()
  created?: Date;

  @UpdateDateColumn()
  updated?: Date;

  @OneToMany(() => CommentEntity, (comment) => comment.user)
  comments: CommentEntity[];

  @OneToMany(() => ResponseCommentEntity, (responsecom) => responsecom.user)
  responses: ResponseCommentEntity[];

  @OneToMany(() => FavoriteEntity, (favorite) => favorite.user)
  favorites: FavoriteEntity[];

  @OneToMany(() => RatingEntity, (rating) => rating.user)
  ratings: RatingEntity[];

  @BeforeInsert()
  async hashPassword(): Promise<void> {
    try {
      const saltOrRounds = 10;
      this.password = await bcrypt.hash(this.password, saltOrRounds);
    } catch (error) {
      throw new InternalServerErrorException('Error al cifrar la contraseña', error);
    }
  }
}
