import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
} from '@nestjs/common';
import { WorkspaceService } from '../services/workspace.service';
import {
  WorkspaceDto,
  UpdateWorkspaceDto,
} from '../repositories/workspace.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('workspaces')
@ApiTags('Workspaces')
export class WorkspacesController {
  constructor(private readonly workspacesService: WorkspaceService) { }

  @Get()
  async findAll() {
    return await this.workspacesService.findAll();
  }

  @Post()
  async create(@Body() workspace: WorkspaceDto): Promise<WorkspaceDto> {
    return await this.workspacesService.create(workspace);
  }

  @Put(':id')
  async update(
    @Body() workspace: UpdateWorkspaceDto,
    @Param('id') id: string,
  ): Promise<WorkspaceDto> {
    return await this.workspacesService.update(workspace, id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<WorkspaceDto> {
    return await this.workspacesService.delete(id);
  }
}
