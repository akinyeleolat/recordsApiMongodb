/* eslint-disable import/prefer-default-export */
import {
  validate,
  toLowerCaseAndTrim,
} from '../../utils';

/**
  * validate user login endpoint
  * @param {Object} req - request body
  * @param {Object} res - response body
  * @param {Object} next - call next function
  * @returns {Function} validate - call validate function
*/
export const validateRecordInput = (req, res, next) => {
  const formattedValues = toLowerCaseAndTrim(req.body);
  req.formattedValues = formattedValues;

  const dateFormat = 'regex:/^d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/';

  const {
    startDate, endDate, minCount, maxCount
  } = formattedValues;

  const data = {
    startDate,
    endDate,
    minCount,
    maxCount
  };

  const recordRules = {
    startDate: ['required', dateFormat, 'date'],
    endDate: ['required', dateFormat, 'date'],
    minCount: 'required|integer',
    maxCount: 'required|integer',
  };
  validate(data, recordRules, res, next);
};
