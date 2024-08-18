import { InternalServerErrorException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { BeforeInsert, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { CommentEntity } from '../comment/entities/comment.entity';
import { ResponseCommentEntity } from '../comment/entities/reposnse.entiry';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column()
  role: number = 3;

  @Column({ name: 'photo_url' })
  photoUrl: string = "";

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
