import { CreateUserDto } from './dto/create-user.dto';
import { Body, Injectable, Param } from '@nestjs/common';
import { UserModel } from './user.model';
import { EntityRepository, Repository, getConnection } from 'typeorm';

@EntityRepository(UserModel)
@Injectable()
export class UserService extends Repository<UserModel> {
  async getUserId(@Param() id: string): Promise<UserModel> {
    try {
      const user = await getConnection()
        .createQueryBuilder()
        .select([
          'user.id',
          'user.name',
          'user.email',
          'user.createAt',
          'user.updatedAt',
        ])
        .from(UserModel, 'user')
        .where('user.id = :id', { id })
        .getOne();

      return user;
    } catch (err) {
      return err;
    }
  }

  async createUser(@Body() user: CreateUserDto): Promise<UserModel> {
    try {
      const { name, email, password } = user;

      const userCreate = new UserModel();

      userCreate.name = name;
      userCreate.email = email;
      userCreate.password = password;

      await userCreate.save();

      return userCreate;
    } catch (err) {
      return err;
    }
  }

  async deleteUser(@Param() id: string): Promise<UserModel | string> {
    try {
      await getConnection()
        .createQueryBuilder()
        .delete()
        .from(UserModel)
        .where('id = :id', { id })
        .execute();
      return id;
    } catch (err) {
      return err;
    }
  }
}
