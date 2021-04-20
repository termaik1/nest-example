import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderModel } from './order.model';

@Module({
  imports: [TypeOrmModule.forFeature([OrderModel])],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
