import { UserModel } from 'src/user/user.model';
import { UserService } from 'src/user/user.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(user: UserModel): Promise<UserModel | { token: string }> {
    try {
      const loginUser = await this.userService.getUserEmail(user);
      const { email, id, password } = loginUser;

      const isMatchPassword = await new Promise((resolve, reject) => {
        bcrypt.compare(user.password, password, (_, res) => {
          if (res) {
            resolve(res);
          }
          reject('User not found');
        });
      });

      if (email && id && isMatchPassword) {
        return {
          token: this.jwtService.sign({ email, id }),
        };
      }

      throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
    } catch (err) {
      return err;
    }
  }
}
