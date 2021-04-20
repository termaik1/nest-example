import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';

import { DatabaseConnectionService } from './database';

import { OrderModule } from './order/order.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: DatabaseConnectionService,
    }),
    OrderModule,
    ProductModule,
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
