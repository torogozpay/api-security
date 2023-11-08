import { Injectable } from '@nestjs/common';
import { WorkspaceRepository } from '../repositories/workspace.repository';
import {
  WorkspaceDto,
  UpdateWorkspaceDto,
} from '../repositories/workspace.dto';

@Injectable()
export class WorkspaceService {
  constructor(private readonly workspaceRepository: WorkspaceRepository) { }

  async findAll(): Promise<WorkspaceDto[]> {
    return await this.workspaceRepository.findAll();
  }

  async create(workspace: WorkspaceDto): Promise<WorkspaceDto> {
    return await this.workspaceRepository.create(workspace);
  }

  async update(
    workspace: UpdateWorkspaceDto,
    id: string,
  ): Promise<WorkspaceDto> {
    return await this.workspaceRepository.update(workspace, id);
  }

  async delete(uuid: string): Promise<WorkspaceDto> {
    return await this.workspaceRepository.delete(uuid);
  }
}
