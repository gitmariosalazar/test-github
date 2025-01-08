import { Logger } from '@nestjs/common';
import { connect } from 'mongoose';
import { envs } from 'src/settings';


const logger = new Logger('MONGODB')

export const connectToMongoDB = async () => {
  try {
    await connect(envs.mongo_uri);
    logger.log('Connect to MongoDB successfully!');
  } catch (error) {
    logger.error(`Connect to MongoDB failed: ${error}`);
    throw error
  }
}
// TODO: Comment todo test conflicts