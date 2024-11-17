import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize';

import { Task } from './task.model';
import { Users } from '../users/users.model';

import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectModel(Task)
    private readonly taskModel: typeof Task,
  ) {}

  async findAllTasks(): Promise<Task[]> {
    return this.taskModel.findAll({
      include: [
        {
          model: Users,
          as: 'assignedTo',
          attributes: ['id', 'fullName', 'username'],
        },
      ],
      attributes: {
        include: [
          [
            Sequelize.literal(
              `(SELECT COUNT(*) FROM Comments WHERE Comments.taskId = Task.id)`,
            ),
            'commentsCount',
          ],
        ],
      },
      group: ['Task.id'],
    });
  }

  async create(createTaskDto: CreateTaskDto): Promise<any> {
    const taskData = {
      title: createTaskDto.title,
      description: createTaskDto.description,
      status: Number(createTaskDto.status) ?? 0,
      tags: createTaskDto.tags ?? [],
      storyPoints: Number(createTaskDto.storyPoints),
      createdBy: createTaskDto.createdBy,
      assignee: Number(createTaskDto.assignee),
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
