import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { GetIdProductDto } from './dto/get-id-product.dto';

import { ProductModel } from './product.model';
import { EntityRepository, Repository, getConnection } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
@EntityRepository(ProductModel)
@Injectable()
export class ProductService extends Repository<ProductModel> {
  async getProductId(id: string): Promise<ProductModel> {
    try {
      const product = await getConnection()
        .createQueryBuilder()
        .select('product')
        .from(ProductModel, 'product')
        .where('product.id = :id', { id })
        .getOne();

      return product;
    } catch (err) {
      return err;
    }
  }

  async createProduct(product: CreateProductDto): Promise<ProductModel> {
    try {
      const productModel = new ProductModel();
      for (const key in product) {
        productModel[key] = product[key];
      }

      await productModel.save();

      return productModel;
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

      throw new NotFoundException('Продукт отсуствует в базе');
    } catch (err) {
      return err;
    }
  }
}
