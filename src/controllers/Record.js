import RecordServices from '../services/Record';

import { displayError } from '../utils';

const RecordServiceInstance = new RecordServices();

// https://stackoverflow.com/questions/49470060/should-i-use-classes-for-nodejs-models-and-controller about class based controller
const getRecordsByDateRangeFilterByCount = async (req, res, next) => {
  try {
    const {
      startDate, endDate, minCount, maxCount
    } = req.body;
    const results = await RecordServiceInstance
      .getRecordsByDateRangeFilterByCount(startDate, endDate, minCount, maxCount);

    if (results instanceof Error) {
      return displayError(results, res, results.httpStatusCode);
    }
    return res.json(results).status(200);
  } catch (error) {
    return next(Error);
  }
};

export default getRecordsByDateRangeFilterByCount;
