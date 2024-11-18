import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Users extends Model<Users> {
  @Column({
    unique: true,
    type: DataType.STRING,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  @Column
  password: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  @Column
  fullName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  @Column
  username: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  birthdate?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  phone?: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  gender?: number;
}
