import { ApiProperty } from '@nestjs/swagger';

export class UserIdDto {
  @ApiProperty()
  readonly id: string;
}
