import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/sequelize';
import * as bcrypt from 'bcryptjs';
import { UserType } from 'src/models/user';
import { User } from 'src/user/user.model';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User) private userModel: typeof User,
    private jwtService: JwtService,
  ) {}

  async register(data: UserType) {
    data.password = await bcrypt.hash(data.password, 10);
    return this.userModel.create(data);
  }

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.userModel.findOne({ where: { email } });
    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    }
    return null;
  }

  async login(user: User) {
    return {
      user: {
        fullName: user.fullName,
        username: user.username,
      },
      access_token: this.jwtService.sign({ email: user.email, sub: user.id }),
    };
  }
}
