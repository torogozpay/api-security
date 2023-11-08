import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty()
  uuid: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  cloud_user_id: string;

  constructor() {
    this.uuid = '';
    this.email = '';
    this.cloud_user_id = '';
  }
}

export class UpdateUserDto {
  @ApiProperty()
  email: string;

  @ApiProperty()
  cloud_user_id: string;

  constructor() {
    this.email = '';
    this.cloud_user_id = '';
  }
}
