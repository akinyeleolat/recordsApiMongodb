import mongoose from 'mongoose';
import config from './configs';
import ExpressLoader from './loaders/Express';
import logger from './services/Logger';

const mongooseOptions = {
  useCreateIndex: true,
  useNewUrlParser: true,
  autoReconnect: true
};

mongoose.Promise = global.Promise;

mongoose.connect(config.dbUrl, mongooseOptions)
  .then(() => {
    logger.info('Database connection successful');

    // eslint-disable-next-line no-new
    new ExpressLoader();
  })
  .catch((err) => {
    // eslint-disable-next-line
    console.error( err );
    logger.error(err);
  });
