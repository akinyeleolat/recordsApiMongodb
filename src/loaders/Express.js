/* eslint-disable valid-jsdoc */
import { urlencoded, json } from 'body-parser';
import express from 'express';
import morgan from 'morgan';
import compression from 'compression';
import config from '../configs';
import routes from '../routes';
import logger from '../services/Logger';

/**
 * Application loader
 */
class ExpressLoader {
  /**
     * constructor
     */
  constructor() {
    const app = express();

    // Setup error handling, this must be after all other middleware
    app.use(ExpressLoader.errorHandler);

    // Set up middleware
    app.use(morgan('dev'));
    app.use(compression());
    app.use(urlencoded({
      extended: false,
      limit: '20mb'
    }));
    app.use(json({ limit: '20mb' }));

    // Pass app to routes
    routes(app);

    app.all('*', (req, res) => res.status(404).send({
      status: 'error',
      message: 'you have entered an incorrect route'
    }));

    // Start application
    this.server = app.listen(config.port, () => {
      logger.info(`Express running, now listening on port ${config.port}`);
      // console.log(`Express running, now listening on port ${config.port}`);
    });
  }

  /**
   * server
   */
  get Server() {
    return this.server;
  }

  /**
   * @description Default error handler to be used with express
   * @param error Error object
   * @param req {object} Express req object
   * @param res {object} Express res object
   * @param next {function} Express next object
   * @returns {*} errors
   */
  static errorHandler(error, req, res, next) {
    let parsedError;

    // Attempt to gracefully parse error object
    try {
      if (error && typeof error === 'object') {
        parsedError = JSON.stringify(error);
      } else {
        parsedError = error;
      }
    } catch (e) {
      logger.error(e);
    }

    // Log the original error
    logger.error(parsedError);

    // If response is already sent, don't attempt to respond to client
    if (res.headersSent) {
      return next(error);
    }

    logger.error('Error %o', error);
    return res.json(error).status(error.httpStatusCode || 500);
  }
}

export default ExpressLoader;
// add helmet.js
