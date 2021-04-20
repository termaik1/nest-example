import { CrudController } from '@nestjsx/crud';
import { Crud } from '@nestjsx/crud';
import { Controller } from '@nestjs/common';

import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductModel } from './product.model';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: {
    type: ProductModel,
  },
  dto: {
    create: CreateProductDto,
  },
  routes: {
    only: ['getOneBase', 'createOneBase'],
  },
  params: {
    id: {
      type: 'uuid',
      primary: true,
      field: 'id',
    },
  },
  query: {
    limit: 30,
  },
  validation: false,
})
@ApiTags('product')
@Controller('product')
export class ProductController implements CrudController<ProductModel> {
  constructor(public service: ProductService) {}
}
