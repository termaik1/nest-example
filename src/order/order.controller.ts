import { UpdateOrderDto } from './dto/update-order.dto';
import { OrderService } from './order.service';
import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';
import { OrderModel } from './order.model';

import { CreateOrderDto } from './dto/create-order.dto';

@Crud({
  model: {
    type: OrderModel,
  },
  dto: {
    create: CreateOrderDto,
    update: UpdateOrderDto,
  },
  routes: {
    only: [
      'getManyBase',
      'getOneBase',
      'createOneBase',
      'replaceOneBase',
      'updateOneBase',
    ],
  },
  params: {
    id: {
      type: 'uuid',
      primary: true,
      field: 'id',
    },
    user: {
      type: "uuid",
      primary: true,
      field: 'user'
    }
  },
  query: {
    limit: 25,
    join: {
      user: {
        eager: true,
        exclude: ['password'],
        // alias: 'user',
      },
      product: {
        eager: true,
        // alias: 'product',
      },
    },
    filter: [
      {
        field: 'user',
        operator: '$eqL',
        value: "user"
      },
    ],
  },
  validation: false,
})
@ApiTags('order')
@Controller('order')
export class OrderController implements CrudController<OrderModel> {
  constructor(public service: OrderService) {}
}
