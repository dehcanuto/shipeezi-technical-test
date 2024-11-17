import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { Comments } from './comments.model';
import { Users } from 'src/users/users.model';
import { CreateCommentDto } from './dto/create-comment.dto';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comments) private readonly commentModel: typeof Comments,
  ) {}

  async create(createCommentDto: CreateCommentDto): Promise<Comments[]> {
    const data = {
      comment: createCommentDto.comment,
      taskId: createCommentDto.taskId,
      userId: createCommentDto.userId,
    };

    await this.commentModel.create(data);
    return this.findAllByTask(createCommentDto.taskId);
  }

  async findAllByTask(taskId: number): Promise<Comments[]> {
    return this.commentModel.findAll({
      where: { taskId },
      include: [
        {
          model: Users,
          as: 'commentedBy',
          attributes: ['id', 'fullName', 'username'],
        },
      ],
      order: [['createdAt', 'DESC']],
    });
  }
}
