import {
  Controller,
  Get,
  Param,
  Patch,
  Delete,
  Body,
  NotFoundException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll() {
    return this.userService.findAllUsers();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const user = await this.userService.findUserById(id);
    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }
    return user;
  }

  @Patch(':id')
  async updateUser(
    @Param('id') id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userService.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    await this.userService.deleteUser(id);
    return { message: 'Usuário deletado com sucesso' };
  }
}
