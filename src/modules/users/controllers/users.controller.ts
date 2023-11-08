import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { UserService } from '../services/users.service';
import { UserDto, UpdateUserDto } from '../repositories/user.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('Usuarios')
export class UsersController {
  constructor(private readonly userService: UserService) { }

  @Get()
  async findAll() {
    return await this.userService.findAll();
  }

  @Post()
  async create(@Body() user: UserDto): Promise<UserDto> {
    return await this.userService.create(user);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() user: UpdateUserDto,
  ): Promise<UserDto> {
    return await this.userService.update(user, id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<UserDto> {
    return await this.userService.delete(id);
  }
}
