import { LoginUserDto } from './dto/login-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import {
  Body,
  HttpException,
  HttpStatus,
  Injectable,
  Param,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserModel } from './user.model';
import { EntityRepository, Repository, getConnection } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteUserDto } from './dto/delete-user.dto';

@EntityRepository(UserModel)
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserModel)
    private userRepository: Repository<UserModel>,
  ) {}
  async getUserId(@Param() id: string): Promise<UserModel> {
    try {
      const user = await getConnection()
        .createQueryBuilder()
        .select(['user.id', 'user.name', 'user.email', 'user.createAt'])
        .from(UserModel, 'user')
        .where('user.id = :id', { id })
        .getOne();

      return user;
    } catch (err) {
      return err;
    }
  }

  async getUserEmail(@Body() user: LoginUserDto): Promise<UserModel> {
    try {
      const loginUser = await this.userRepository.findOne({
        email: user.email,
      });

      if (loginUser) {
        return loginUser;
      }

      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    } catch (err) {
      return err;
    }
  }

  async createUser(@Body() user: CreateUserDto): Promise<UserModel> {
    try {
      const newUser = await this.userRepository.create(user);
      const hash = await bcrypt.hash(user.password, 10);

      await this.userRepository.save({ ...newUser, password: hash });

      return newUser;
    } catch (err) {
      return err;
    }
  }

  async deleteUser(@Param() user: DeleteUserDto): Promise<UserModel | string> {
    try {
      const deleteUser = await this.userRepository.delete(user);

      if (deleteUser.affected > 0) {
        return 'success';
      }

      throw 'Error delete user';
    } catch (err) {
      return err;
    }
  }
}
