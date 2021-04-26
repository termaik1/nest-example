import { ApiProperty } from '@nestjs/swagger';

export class GetProductIdDto {
  @ApiProperty()
  readonly id: string;
}
