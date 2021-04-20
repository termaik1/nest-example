import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';

import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserIdDto } from './dto/user-id.dto';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  public async getId(@Param('id') userId: string) {
    return this.userService.getUserId(userId);
  }

  @Post('')
  public async create(@Body() user: CreateUserDto) {
    return this.userService.createUser(user);
  }

  @Delete(':id')
  public async delete(@Param('id') { id }: UserIdDto) {
    return this.userService.deleteUser(id);
  }
}
