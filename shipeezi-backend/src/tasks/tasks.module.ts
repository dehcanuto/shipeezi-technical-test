import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { Task } from './task.model';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';

@Module({
  imports: [SequelizeModule.forFeature([Task])],
  controllers: [TasksController],
  providers: [TasksService],
  exports: [TasksService],
})
export class TasksModule {}
