import { Client } from 'pg';
import migrate from 'node-pg-migrate';

import { config } from './pool';
import { eventEmitter, logger } from '../utils/globals';

let attemptsRemaining = 5;

const runMigrations = async (): Promise<void> => {
  try {
    await createDatabase();
    logger.log('database migrations...');
    await migrate({
      databaseUrl: config,
      migrationsTable: 'migrations',
      dir: 'src/db/migrations',
      direction: 'up',
    });
    eventEmitter.emit('migrations-complete');
  } catch (e) {
    console.error(e.stack);
    logger.log('error running migrations', e.stack);
    attemptsRemaining--;
    if (attemptsRemaining) {
      setTimeout(async () => await runMigrations(), 1000);
    } else {
      logger.log('Database migrations failed too many times...');
    }
  }
};

/**
 * @private
 */
const createDatabase = async (): Promise<void> => {
  const databaseConfig = { ...config, database: 'postgres' };
  const client = new Client(databaseConfig);
  await client.connect();
  try {
    const { rows } = await client.query(
      `SELECT datname FROM pg_catalog.pg_database WHERE datname = '${config.database}'`,
    );
    if (rows.length === 0) {
      logger.warn(`creating ${config.database} database...`);
      await client.query(`CREATE DATABASE ${config.database}`);
    }
  } finally {
    await client.end();
  }
};

export default runMigrations;
