import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    required: true,
    type: 'string',
  })
  readonly name: string;
  @ApiProperty({
    required: true,
    type: 'string',
  })
  readonly email: string;
  @ApiProperty({
    required: true,
    type: 'string',
  })
  readonly password: string;
}
