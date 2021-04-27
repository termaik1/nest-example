import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from 'typeorm';

export class GetOrderIdDto extends BaseEntity {
  @ApiProperty({
    type: 'uuid',
    example: '17c13214-a337-11eb-bcbc-0242ac130002',
  })
  id: string;
}
