import { Logger } from '@nestjs/common'
import { Pool } from 'pg'
import { envs } from 'src/settings'
const logger = new Logger('PostgreSQL');
export const postgresPool = new Pool({
  user: envs.db_username,
  host: envs.db_hostname,
  password: envs.db_password,
  database: envs.db_database,
  port: envs.db_port
})

export const connectToPostgreSQL = async () => {
  try {
    await postgresPool.connect();
    logger.log('Connect to PostgreSQL successfully!');
  } catch (error) {
    logger.error(`Connect to PostgreSQL failed: ${error.message}`);
    throw error
  }
}
