import { Injectable, Body, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { OrderModel } from './order.model';
import { CreateOrderDto } from './dto/create-order.dto';
import { GetOrderIdDto } from './dto/get-order-id.dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderModel)
    private orderRepository: Repository<OrderModel>,
  ) {}

  async createOrder(@Body() order: CreateOrderDto): Promise<OrderModel> {
    try {
      const newOrder = Object.assign(new OrderModel(), order);

      await this.orderRepository.save(newOrder);
      return newOrder;
    } catch (err) {
      return err;
    }
  }

  async getOrderId(order: GetOrderIdDto): Promise<OrderModel> {
    try {
      const currentOrder = await this.orderRepository.findOne(order)

      console.log('currentOrder', currentOrder);
      if (currentOrder) {
        return currentOrder;
      }

      throw new HttpException('Order not found', HttpStatus.NOT_FOUND);
    } catch (err) {
      return err;
    }
  }
}
