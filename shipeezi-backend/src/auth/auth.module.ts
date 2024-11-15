import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { Users } from 'src/users/users.model';
import { ConfigModule } from 'src/config/config.module';
import { UsersService } from 'src/users/users.service';

@Module({
  imports: [
    ConfigModule,
    SequelizeModule.forFeature([Users]),
    PassportModule,
    JwtModule.register({
      secret: 'NBIGajvcNqgMtkLbnWJGHKxzuUhmZyDH', // process.env.JWT_SECRET,
      signOptions: { expiresIn: '2h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, UsersService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
