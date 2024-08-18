import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ResponseCommentService } from '../comment.service';
import { CreateResponseCommentDto } from '../dto/create-response-comment.dto';
import { UpdateResponseCommentDto } from '../dto/update-response-comment.dto';

@Controller('rescomment')
export class RescommentController {
    constructor(private readonly rescommentService: ResponseCommentService) { }

    @Post()
    async create(@Body() createRescommentDto: CreateResponseCommentDto) {
        try {
            await this.rescommentService.create(
                createRescommentDto,
            );

            return {
                success: true,
                message: 'Rescomment Created Successfully',
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
            const data =
                await this.rescommentService.findAll();
            return {
                success: true,
                data,
                message: 'Rescomment Fetched Successfully',
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
            const data = await this.rescommentService.findOne(
                +id,
            );
            return {
                success: true,
                data,
                message: 'Rescomment Fetched Successfully',
            };
        } catch (error) {
            return {
                success: false,
                message: error.message,
            };
        }
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateRescommentDto: UpdateResponseCommentDto) {
        try {
            await this.rescommentService.update(
                +id,
                updateRescommentDto,
            );
            return {
                success: true,
                message: 'Rescomment Updated Successfully',
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
            await this.rescommentService.remove(+id);
            return {
                success: true,
                message: 'Rescomment Deleted Successfully',
            };
        } catch (error) {
            return {
                success: false,
                message: error.message,
            };
        }
    }
}
