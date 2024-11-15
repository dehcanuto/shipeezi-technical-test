import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Comments } from './comments.model';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  async create(@Body() createCommentDto: CreateCommentDto): Promise<Comments> {
    return this.commentsService.create(createCommentDto);
  }

  @Get('task/:taskId')
  async findAllByTask(@Param('taskId') taskId: number): Promise<Comments[]> {
    return this.commentsService.findAllByTask(taskId);
  }
}
