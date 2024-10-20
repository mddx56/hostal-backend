import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ResponseCommentService } from '../comment.service';
import { CreateResponseCommentDto } from '../dto/create-response-comment.dto';
import { UpdateResponseCommentDto } from '../dto/update-response-comment.dto';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: ResponseCommentService) {}

  @Post()
  async create(@Body() createCommentDto: CreateResponseCommentDto) {
    try {
      await this.commentService.create(createCommentDto);

      return {
        success: true,
        message: 'Comment Created Successfully',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }

  @Get()
  async findAll() {
    try {
      const data = await this.commentService.findAll();
      return {
        success: true,
        data,
        message: 'Comment Fetched Successfully',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const data = await this.commentService.findOne(+id);
      return {
        success: true,
        data,
        message: 'Comment Fetched Successfully',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCommentDto: UpdateResponseCommentDto) {
    try {
      await this.commentService.update(+id, updateCommentDto);
      return {
        success: true,
        message: 'Comment Updated Successfully',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      await this.commentService.remove(+id);
      return {
        success: true,
        message: 'Comment Deleted Successfully',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }
}
