import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';

import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { GetProductIdDto } from './dto/get-product-id.dto';

import { ApiTags } from '@nestjs/swagger';

@ApiTags('product')
@UseGuards(JwtAuthGuard)
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get(':id')
  public async getId(@Param('id') product: GetProductIdDto) {
    return this.productService.getProductId(product);
  }

  @Post('')
  public async createProduct(@Body() product: CreateProductDto) {
    return this.productService.createProduct(product);
  }

  @Delete(':id')
  public async deleteProduct(@Param('id') id: string) {
    return this.productService.deleteProduct(id);
  }
}
