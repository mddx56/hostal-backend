import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CreateResponseCommentDto } from './dto/create-response-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { UpdateResponseCommentDto } from './dto/update-response-comment.dto';
import { CommentEntity } from './entities/comment.entity';
import { ResponseCommentEntity } from './entities/reposnse.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(CommentEntity)
    private readonly commentRepository: Repository<CommentEntity>,
  ) {}

  async create(createCommentDto: CreateCommentDto) {
    const commentData = await this.commentRepository.create(createCommentDto);
    return this.commentRepository.save(commentData);
  }

  async findAll() {
    return await this.commentRepository.find();
  }

  async findOne(id: number): Promise<CommentEntity> {
    const commentData = await this.commentRepository.findOneBy({ id });
    if (!commentData) {
      throw new HttpException('Comment Not Found', 404);
    }
    return commentData;
  }

  async update(id: number, updateCommentDto: UpdateCommentDto) {
    const existingComment = await this.findOne(id);
    const commentData = this.commentRepository.merge(existingComment, updateCommentDto);
    return await this.commentRepository.save(commentData);
  }

  async remove(id: number) {
    const existingComment = await this.findOne(id);
    return await this.commentRepository.remove(existingComment);
  }
}

@Injectable()
export class ResponseCommentService {
  constructor(
    @InjectRepository(ResponseCommentEntity)
    private readonly resCommentRepository: Repository<ResponseCommentEntity>,
  ) {}

  async create(createreposneCommentDto: CreateResponseCommentDto) {
    const rescommentData = await this.resCommentRepository.create(createreposneCommentDto);
    return this.resCommentRepository.save(rescommentData);
  }

  async findAll() {
    return await this.resCommentRepository.find();
  }

  async findOne(id: number): Promise<ResponseCommentEntity> {
    const resCommentData = await this.resCommentRepository.findOneBy({ id });
    if (!resCommentData) {
      throw new HttpException('Response Comment Not Found', 404);
    }
    return resCommentData;
  }

  async update(id: number, updateResCommentDto: UpdateResponseCommentDto) {
    const existingResComment = await this.findOne(id);
    const commentData = this.resCommentRepository.merge(existingResComment, updateResCommentDto);
    return await this.resCommentRepository.save(commentData);
  }

  async remove(id: number) {
    const existingComment = await this.findOne(id);
    return await this.resCommentRepository.remove(existingComment);
  }
}
