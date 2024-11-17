import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  UseGuards,
  Request,
} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Comments } from './comments.model';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(
    @Body() createCommentDto: CreateCommentDto,
    @Request() req,
  ): Promise<Comments> {
    const userId = req.user.userId;
    return this.commentsService.create({ ...createCommentDto, userId: userId });
  }

  @UseGuards(JwtAuthGuard)
  @Get('task/:taskId')
  async findAllByTask(@Param('taskId') taskId: number): Promise<Comments[]> {
    return this.commentsService.findAllByTask(taskId);
  }
}
