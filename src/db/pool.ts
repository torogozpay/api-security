import { Pool } from 'pg';

export const config = {
  application_name: 'seguridad',
  host: process.env.POSTGRES_HOST || 'localhost',
  user: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'password',
  database: 'seguridad_torogoz',
};

/**
 * @type {Pool} Singleton Pool Instance
 */
export default new Pool(config);
