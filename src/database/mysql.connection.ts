import * as mysql from 'mysql2';
import { Logger } from '@nestjs/common';
import { envs } from 'src/settings';

const logger = new Logger('MySQL');

export const connectToMySQL = async () => {
  try {
    const connection = mysql.createConnection({
      host: envs.mysql_hostname,
      user: envs.mysql_username,
      database: envs.mysql_database,
      password: envs.mysql_password,
      port: envs.mysql_port,
    });

    await connection.connect((err) => {
      if (err) {
        throw err;
      }
      logger.log('Connect to MySQL successfully!');
    });
  } catch (error) {
    logger.error(`Connect to MySQL failed: ${error.message}`);
    throw error
  }
};
