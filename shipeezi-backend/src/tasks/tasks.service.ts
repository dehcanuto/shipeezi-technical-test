import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { Task } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task) private readonly taskModel: typeof Task) {}

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const taskData = {
      title: createTaskDto.title,
      description: createTaskDto.description,
      status: createTaskDto.status ?? 0,
      tags: createTaskDto.tags ?? [],
      storyPoints: createTaskDto.storyPoints,
      createdBy: createTaskDto.createdBy,
      assignee: createTaskDto.assignee,
    };

    return this.taskModel.create(taskData);
  }

  async findById(id: number): Promise<Task> {
    const task = await this.taskModel.findByPk(id);
    if (!task) throw new NotFoundException('Task not found');
    return task;
  }

  async update(id: number, updateTaskDto: UpdateTaskDto): Promise<Task> {
    const task = await this.findById(id);
    return task.update(updateTaskDto);
  }
}
