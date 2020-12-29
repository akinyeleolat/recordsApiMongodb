import { createLogger, format as _format, transports as _transports } from 'winston';

const logger = createLogger({
  level: 'info',
  format: _format.json(),
  defaultMeta: {
    service: 'record-fetching-service',
    time: new Date().toISOString()
  },
  transports: [
    // - Write to all logs with level `info` and below to `combined.log`
    // - Write all logs error (and below) to `error.log`.
    new _transports.File({ filename: 'error.log', level: 'error' }),
    new _transports.File({ filename: 'combined.log' })
  ]
});
// can set up a strea functions to check the logs
export default logger;
