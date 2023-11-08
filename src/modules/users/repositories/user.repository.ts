import Repository from '../../../db/repository';
import Pool from '../../../db/pool';
import { Injectable } from '@nestjs/common';
import { UserDto, UpdateUserDto } from '../repositories/user.dto';

@Injectable()
export class UserRepository extends Repository {
  constructor() {
    super('users');
  }

  async findAll(): Promise<UserDto[]> {
    const sql = `SELECT * FROM ${this.tableName}`;
    const result = await Pool.query(sql);
    return result.rows;
  }

  async create(user: UserDto): Promise<UserDto> {
    const sql = `INSERT INTO ${this.tableName} (uuid, email, cloud_user_id) VALUES ($1, $2, $3) RETURNING *`;
    const result = await Pool.query(sql, [
      user.uuid,
      user.email,
      user.cloud_user_id,
    ]);
    return result.rows[0];
  }

  async update(user: UpdateUserDto, id: string): Promise<UserDto> {
    const sql = `UPDATE ${this.tableName} SET email = $2, cloud_user_id = $3 WHERE uuid = $1 RETURNING *`;
    const result = await Pool.query(sql, [id, user.email, user.cloud_user_id]);
    return result.rows[0];
  }

  async delete(uuid: string): Promise<UserDto> {
    const sql = `DELETE FROM ${this.tableName} WHERE uuid = $1 RETURNING *`;
    const result = await Pool.query(sql, [uuid]);
    return result.rows[0];
  }
}
