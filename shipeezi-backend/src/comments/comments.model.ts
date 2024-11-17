import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Task } from '../tasks/task.model';
import { Users } from '../users/users.model';

@Table
export class Comments extends Model {
  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  comment: string;

  @ForeignKey(() => Task)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  taskId: number;

  @ForeignKey(() => Users)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId: number;

  @BelongsTo(() => Task)
  task: Task;

  @BelongsTo(() => Users)
  user: Users;
}
