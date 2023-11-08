import { Injectable } from '@nestjs/common';
import Repository from 'src/db/repository';
import Pool from '../../../db/pool';
import {
  WorkspaceDto,
  UpdateWorkspaceDto,
} from '../repositories/workspace.dto';

@Injectable()
export class WorkspaceRepository extends Repository {
  constructor() {
    super('workspaces');
  }

  async findAll(): Promise<WorkspaceDto[]> {
    const sql = `SELECT * FROM ${this.tableName}`;
    const result = await Pool.query(sql);
    return result.rows;
  }

  async create(workspace: WorkspaceDto): Promise<WorkspaceDto> {
    const sql = `INSERT INTO ${this.tableName} (uuid, name, description, owner_uuid) VALUES ($1, $2, $3, $4) RETURNING *`;
    const result = await Pool.query(sql, [
      workspace.uuid,
      workspace.name,
      workspace.description,
      workspace.owner_uuid,
    ]);
    return result.rows[0];
  }

  async update(
    workspace: UpdateWorkspaceDto,
    id: string,
  ): Promise<WorkspaceDto> {
    const sql = `UPDATE ${this.tableName} SET name = $2, description = $3, owner_uuid = $4 WHERE uuid = $1 RETURNING *`;
    const result = await Pool.query(sql, [
      id,
      workspace.name,
      workspace.description,
      workspace.owner_uuid,
    ]);
    return result.rows[0];
  }

  async delete(uuid: string): Promise<WorkspaceDto> {
    const sql = `DELETE FROM ${this.tableName} WHERE uuid = $1 RETURNING *`;
    const result = await Pool.query(sql, [uuid]);
    return result.rows[0];
  }
}
