import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
  @ApiProperty()
  readonly user: string;

  @ApiProperty()
  readonly product: string;
}
