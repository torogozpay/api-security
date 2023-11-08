import { ApiProperty } from '@nestjs/swagger';

export class WorkspaceDto {
  @ApiProperty()
  uuid: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  owner_uuid: string;

  constructor() {
    this.uuid = '';
    this.name = '';
    this.description = '';
    this.owner_uuid = '';
  }
}

export class UpdateWorkspaceDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  owner_uuid: string;

  constructor() {
    this.name = '';
    this.description = '';
    this.owner_uuid = '';
  }
}
