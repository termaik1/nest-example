import { CrudController } from '@nestjsx/crud';
import { Crud } from '@nestjsx/crud';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import {GetIdProductDto} from "./dto/get-id-product.dto"
import { ProductModel } from './product.model';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('product')
@Controller('product')
export class ProductController  {
  constructor(private readonly productService: ProductService) {}

  @Get(":id")
  public async getId(@Param('id') id: string) {
    return this.productService.getProductId(id);
  }

  @Post("")
  public async createProduct(@Body() product: CreateProductDto) {
    return this.productService.createProduct(product)
  }

  @Delete(":id")
  public async deleteProduct(@Param('id') id: string) {
    return this.productService.deleteProduct(id)
  }

}
