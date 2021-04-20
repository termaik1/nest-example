import { OrderModel } from './../order/order.model';

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'product' })
export class ProductModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  description: string;

  @Column()
  image: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createAt: Date;
}
