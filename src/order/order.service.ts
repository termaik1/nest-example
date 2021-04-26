import { ProductModel } from './../product/product.model';
import { UserModel } from './../user/user.model';
import { CreateOrderDto } from './dto/create-order.dto';
import { Injectable, Body } from '@nestjs/common';

import { OrderModel } from './order.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderModel)
    private orderRepository: Repository<OrderModel>,
    // private userRepository: Repository<UserModel>,
    // private productService: Repository<ProductModel>,
  ) {}

  async createOrder(@Body() order: CreateOrderDto): Promise<OrderModel> {
    try {

      // const newOrder = new OrderModel();
      // newOrder.user = order.user;
      // newOrder.product = order.product;
      // await this.orderRepository.save({...order})
      throw "SUcces"
    } catch (err) {
      return err;
    }
  }
}
