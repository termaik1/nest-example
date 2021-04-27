import { ProductModel } from './../../product/product.model';
import { UserModel } from './../../user/user.model';
import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from 'typeorm';

export class CreateOrderDto{
  @ApiProperty({
    type: 'uuid',
    example: '17c13214-a337-11eb-bcbc-0242ac130002',
  })
   user: string;

  @ApiProperty({
    type: 'uuid',
    example: '17c13444-a337-11eb-bcbc-0242ac130002',
  })
   product: string;
}
