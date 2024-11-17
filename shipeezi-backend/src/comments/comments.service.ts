import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { Comments } from './comments.model';
import { CreateCommentDto } from './dto/create-comment.dto';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comments) private readonly commentModel: typeof Comments,
  ) {}

  async create(createCommentDto: CreateCommentDto): Promise<Comments> {
    const data = {
      comment: createCommentDto.comment,
      taskId: createCommentDto.taskId,
      userId: createCommentDto.userId,
    };

    return this.commentModel.create(data);
  }

  async findAllByTask(taskId: number): Promise<Comments[]> {
    return this.commentModel.findAll({
      where: { taskId },
      include: [{ all: true }],
    });
  }
}
