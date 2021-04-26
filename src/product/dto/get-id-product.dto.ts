import { ApiProperty } from '@nestjs/swagger';

export class GetIdProductDto {
  @ApiProperty()
  readonly id: string;
}
