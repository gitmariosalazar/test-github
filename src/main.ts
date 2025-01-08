import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envs } from './settings';
import { Logger } from '@nestjs/common';
import * as morgan from 'morgan';
import { connectToMongoDB } from './database/mongodb.connection';
import { connectToMySQL } from './database/mysql.connection';

const mg = connectToMongoDB();
const mysql = connectToMySQL();

console.log(mg);
console.log(mysql);

async function bootstrap() {
  const logger = new Logger('Main');

  const app = await NestFactory.create(AppModule);
  app.use(morgan('dev'));
  await app.listen(envs.port);
  logger.log(`App is running on port: ${envs.port}`);
}
bootstrap();
