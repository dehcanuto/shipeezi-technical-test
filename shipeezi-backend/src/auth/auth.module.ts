import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { User } from 'src/user/user.model';
import { ConfigModule } from 'src/config/config.module';
import { UserService } from 'src/user/user.service';

@Module({
  imports: [
    ConfigModule,
    SequelizeModule.forFeature([User]),
    PassportModule,
    JwtModule.register({
      secret: 'NBIGajvcNqgMtkLbnWJGHKxzuUhmZyDH', // process.env.JWT_SECRET,
      signOptions: { expiresIn: '2h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
