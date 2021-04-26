import { InjectRepository } from '@nestjs/typeorm';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { GetProductIdDto } from './dto/get-product-id.dto';

import { ProductModel } from './product.model';
import { EntityRepository, Repository, getConnection } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
@EntityRepository(ProductModel)
@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductModel)
    private productRepository: Repository<ProductModel>,
  ) {}

  async getProductId(product: GetProductIdDto): Promise<ProductModel> {
    try {
      const productId = await this.productRepository.findOne(product);

      if (productId) {
        return productId;
      }

      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
    } catch (err) {
      return err;
    }
  }

  async createProduct(product: CreateProductDto): Promise<ProductModel> {
    try {
      const newProduct = await this.productRepository.save(product);

      await this.productRepository.save(newProduct);

      return newProduct;
    } catch (err) {
      return err;
    }
  }

  async deleteProduct(id: string): Promise<ProductModel | string> {
    try {
      const productDelete = await getConnection()
        .createQueryBuilder()
        .delete()
        .from(ProductModel)
        .where('id = :id', { id })
        .execute();

      if (productDelete.affected > 0) {
        return id;
      }

      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
    } catch (err) {
      return err;
    }
  }
}
