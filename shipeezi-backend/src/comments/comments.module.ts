import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import { Comments } from './comments.model';
import { Task } from '../tasks/task.model';
import { Users } from '../users/users.model';

@Module({
  imports: [SequelizeModule.forFeature([Comments, Task, Users])],
  controllers: [CommentsController],
  providers: [CommentsService],
})
export class CommentsModule {}
