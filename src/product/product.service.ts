import { InjectRepository } from '@nestjs/typeorm';
import {  Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { ProductModel } from './product.model';

@Injectable()
export class ProductService extends TypeOrmCrudService<ProductModel> {
  constructor(@InjectRepository(ProductModel) repo) {
    super(repo);
  }
}
