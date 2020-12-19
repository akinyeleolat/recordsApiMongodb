import RecordServices from '../services/Record';

import { displayError } from '../utils';

const RecordServiceInstance = new RecordServices();

export const getAllRecords = async (req, res, next) => {
  try {
    const results = await RecordServiceInstance.getAllRecords();

    if (results instanceof Error) {
      return displayError(results, res, results.httpStatusCode);
    }
    return res.json(results).status(200);
  } catch (error) {
    return next(Error);
  }
};


export const getAllRecordsByDate = async (req, res, next) => {
  try {
    const { startDate, endDate } = req.body;
    const results = await RecordServiceInstance.getAllRecordsByDateRange(startDate, endDate);

    if (results instanceof Error) {
      return displayError(results, res, results.httpStatusCode);
    }
    return res.json(results).status(200);
  } catch (error) {
    return next(Error);
  }
};
