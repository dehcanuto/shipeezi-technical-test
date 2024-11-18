import * as bcrypt from 'bcryptjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { Users } from './users.model';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(Users) private userModel: typeof Users) {}

  async findAllUsers(): Promise<Users[]> {
    return this.userModel.findAll();
  }

  async findUserById(id: number): Promise<Users> {
    const user = await this.userModel.findByPk(id);
    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }
    return user;
  }

  async findUserByEmail(email: string): Promise<Users | null> {
    return this.userModel.findOne({ where: { email } });
  }

  async register(createUserDto: CreateUserDto) {
    // // dados de endereco: address e type.
    createUserDto.password = await bcrypt.hash(createUserDto.password, 10);
    return this.userModel.create(createUserDto);
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto): Promise<Users> {
    const user = await this.findUserById(id);

    if (updateUserDto.password) {
      user.password = await bcrypt.hash(updateUserDto.password, 10);
    }

    await user.save();
    return user;
  }

  async updateUserPassword(id: number, newPassword: string): Promise<Users> {
    const user = await this.findUserById(id);
    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();
    return user;
  }

  async deleteUser(id: number): Promise<void> {
    const user = await this.findUserById(id);
    await user.destroy();
  }
}
