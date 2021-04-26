import { Injectable, Body } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { OrderModel } from './order.model';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderModel)
    private orderRepository: Repository<OrderModel>,
  ) {}

  async createOrder(@Body() order: CreateOrderDto): Promise<OrderModel> {
    try {
      const newOrder = await this.orderRepository.create(order);

      await this.orderRepository.save(newOrder);
      return newOrder;
    } catch (err) {
      return err;
    }
  }
}
