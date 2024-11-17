import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { Task } from './task.model';
import { Users } from '../users/users.model';
import { Comments } from '../comments/comments.model';

import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';

@Module({
  imports: [SequelizeModule.forFeature([Task, Users, Comments])],
  controllers: [TasksController],
  providers: [TasksService],
  exports: [TasksService],
})
export class TasksModule {}
