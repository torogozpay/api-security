import { Module } from '@nestjs/common';
import { WorkspacesController } from './controllers/workspaces.controller';
import { WorkspaceRepository } from './repositories/workspace.repository';
import { WorkspaceService } from './services/workspace.service';


@Module({
  controllers: [WorkspacesController],
  providers: [WorkspaceRepository, WorkspaceService],
})
export class WorkspacesModule { }
