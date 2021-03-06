import { GetOrderIdDto } from './dto/get-order-id.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrderService } from './order.service';
import { Controller, Post, Body, UseGuards, Get, Param } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { OrderModel } from './order.model';

import { CreateOrderDto } from './dto/create-order.dto';

@ApiTags('order')
@UseGuards(JwtAuthGuard)
@Controller('order')
export class OrderController {
  constructor(public orderService: OrderService) {}
  @Post('')
  public async createOrder(@Body() order: CreateOrderDto) {
    return this.orderService.createOrder(order);
  }

  @Get(":id")
  public async getOrderId(@Param("id") order: GetOrderIdDto) {
    return this.orderService.getOrderId(order)
  }
}
