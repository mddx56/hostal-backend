import { PartialType } from '@nestjs/swagger';
import { CreateResponseCommentDto } from './create-response-comment.dto';

export class UpdateResponseCommentDto extends PartialType(CreateResponseCommentDto) {}
