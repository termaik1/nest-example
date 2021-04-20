import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  ManyToOne,
  BaseEntity,
  OneToMany,
} from 'typeorm';

import { UserModel } from 'src/user/user.model';
import { ProductModel } from 'src/product/product.model';

enum Status {
  WAITING = 'ожидание',
  PAID = 'оплачено',
  DELIVERED = 'доставлено',
}

@Entity({ name: 'order' })
export class OrderModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => UserModel, user => user.id)
  @JoinColumn()
  user: UserModel;

  // @OneToMany(() => ProductModel, product => product.id)
  @OneToOne(() => ProductModel, product => product.id)
  @JoinColumn()
  product: ProductModel[];

  @Column({ type: 'enum', enum: Status, default: Status.WAITING })
  status: Status;

  @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP" })
  createAt: Date;
}
