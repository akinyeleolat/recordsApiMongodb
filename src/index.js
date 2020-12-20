import mongoose from 'mongoose';
import config from './configs';
import ExpressLoader from './loaders/Express';
import logger from './services/Logger';

const mongooseOptions = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.Promise = global.Promise;

mongoose.connect(config.dbUrl, mongooseOptions)
  .then(() => {
    logger.info('Database connection successful');

    const Server = new ExpressLoader();
    Server();
  })
  .catch((err) => {
    // console.error( err );
    logger.error(err);
  });
