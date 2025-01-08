import { Logger } from '@nestjs/common';
import * as mssql from 'mssql';
import { envs } from 'src/settings';

const logger = new Logger('SQL Server');
// ? Add new comment by branch-04
export const connectToSQLServer = async () => {
  const config: mssql.config = {
    user: envs.sqlserver_username,
    password: envs.sqlserver_password,
    server: envs.sqlserver_hostname,
    database: envs.sqlserver_database,
    port: envs.sqlserver_port,
    options: {
      encrypt: false,
      trustServerCertificate: true
    }
  };
  try {
    await mssql.connect(config);
    logger.log('Connect to SQL Server successfully!');
  } catch (error) {
    logger.error(`Connect to SQL Server failed: ${error.message}`);
    throw error;
  }
}