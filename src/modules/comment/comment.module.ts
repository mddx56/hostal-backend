import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentService, ResponseCommentService } from './comment.service';
import { CommentController } from './controllers/comment.controller';
import { RescommentController } from './controllers/response-comment.controller';
import { CommentEntity } from './entities/comment.entity';
import { ResponseCommentEntity } from './entities/reposnse.entiry';

@Module({
  imports: [TypeOrmModule.forFeature([CommentEntity, ResponseCommentEntity])],
  controllers: [CommentController, RescommentController],
  providers: [CommentService, ResponseCommentService],
})
export class CommentModule { }
