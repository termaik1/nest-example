import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { OrderModel } from './order.model';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class OrderService extends TypeOrmCrudService<OrderModel> {
  constructor(@InjectRepository(OrderModel) repo) {
    super(repo);
  }
}
