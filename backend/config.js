import dotenv from 'dotenv';

dotenv.config();

export default {
  MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost:27017/subscribeTest',
  PORT: process.env.PORT || 6000,
};