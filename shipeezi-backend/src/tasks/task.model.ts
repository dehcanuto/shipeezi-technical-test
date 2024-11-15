import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Users } from '../users/users.model';
import { TaskStatus } from 'src/enums/task-status.enum';

@Table
export class Task extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  description: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: TaskStatus.backlog,
  })
  status: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  tags: string[];

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  storyPoints: number;

  @ForeignKey(() => Users)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  createdBy: number;

  @ForeignKey(() => Users)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  assignee: number;

  @BelongsTo(() => Users, 'createdBy')
  creator: Users;

  @BelongsTo(() => Users, 'assignee')
  assignedTo: Users;
}
