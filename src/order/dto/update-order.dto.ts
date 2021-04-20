import { ApiProperty } from '@nestjs/swagger';

export class UpdateOrderDto {
  @ApiProperty()
  readonly user: string;

  @ApiProperty()
  readonly product: string;
}
