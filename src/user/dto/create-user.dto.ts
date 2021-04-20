import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    required: true,
    type: 'string',
  })
  name: string;
  @ApiProperty({
    required: true,
    type: 'string',
  })
  email: string;
  @ApiProperty({
    required: true,
    type: 'string',
  })
  password: string;
}
