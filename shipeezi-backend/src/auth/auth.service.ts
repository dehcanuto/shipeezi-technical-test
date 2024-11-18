import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/sequelize';
import * as bcrypt from 'bcryptjs';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { Users } from 'src/users/users.model';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Users) private userModel: typeof Users,
    private jwtService: JwtService,
  ) {}

  async register(data: CreateUserDto) {
    data.password = await bcrypt.hash(data.password, 10);
    return this.userModel.create(data);
  }

  async validateUser(email: string, password: string): Promise<Users | null> {
    const user = await this.userModel.findOne({ where: { email } });
    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    }
    return null;
  }

  async login(user: Users) {
    return {
      user: {
        id: user.id,
        email: user.email,
        fullName: user.fullName,
        username: user.username,
        birthdate: user.birthdate,
        phone: user.phone,
        gender: user.gender,
      },
      access_token: this.jwtService.sign({
        email: user.email,
        sub: user.id,
      }),
    };
  }
}
