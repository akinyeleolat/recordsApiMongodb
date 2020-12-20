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
const validateRecordInput = (req, res, next) => {
  const formattedValues = toLowerCaseAndTrim(req.body);
  req.formattedValues = formattedValues;

  const dateFormat = `${/^\d{4}-\d{2}-\d{2}$/}`;

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
    startDate: ['required', 'date', `regex:${dateFormat}`],
    endDate: ['required', 'date', `regex:${dateFormat}`],
    minCount: 'required|integer',
    maxCount: 'required|integer',
  };
  validate(data, recordRules, res, next);
};

export default validateRecordInput;
