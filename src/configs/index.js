import dotenv from 'dotenv';

dotenv.config();

const config = {
  devDbUrl: process.env.DATABASE_URL_DEVELOPMENT,
  dbUrl: process.env.DATABASE_URL,
  port: process.env.PORT || 8000,
  env: process.env.NODE_ENV || 'development',
  logDir: process.env.LOGDIR || 'logs',
};
export default config;
