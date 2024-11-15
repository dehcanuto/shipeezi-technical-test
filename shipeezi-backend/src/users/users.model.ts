import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Users extends Model<Users> {
  @Column({ unique: true })
  email: string;

  @Column
  password: string;

  @Column
  fullName: string;

  @Column
  username: string;
}
