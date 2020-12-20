import Validator from 'validatorjs';


/**
 * check Validation function
 * @param {Object} data - data to be validated
 * @param {Object} rules - rules for validation
 * @returns {Boolean} true - if validation passes
 * @returns {Object} error Object - if validation falis
 */
export const checkValidation = (data, rules) => {
  const validation = new Validator(data, rules);
  if (validation.passes()) {
    return true;
  }
  return {
    error: {
      status: 400,
      message: validation.errors.all()
    }
  };
};

/**
 * Display error
 * @param {Object} err
 * @param {Object} res
 * @param {number} status
 * @param {number} code
 * @param {msg} msg
 * @returns {Object} response body - statusCode and errorMessage
 */
export const displayError = (err, res, status = 400, code = 1, msg) => {
  res.status(status).json({
    code,
    msg,
    details: err.message
  });
};

/**
 * validate endpoint
 * @param {Object} data - data to be validated
 * @param {Object} rules - rules for validation
 * @param {Object} response - response body
 * @param {Object} nextFunction - call next function middleware
 * @returns {Boolean} true - if validation passes
 * @returns {Object} error Object - if validation fails
 */
export const validate = (data, rules, response, nextFunction) => {
  const check = checkValidation(data, rules);
  return check === true ? nextFunction() : displayError(check.error, response, 400, 1, 'validation error');
};


/**
 * @param {object} inputObject
 * @return {object} formattedObject
 */
export const toLowerCaseAndTrim = (inputObject) => {
  const formattedObject = {};
  Object.entries(inputObject).forEach((element) => {
    const key = element[0];
    const value = element[1];
    formattedObject[key] = value.toString().replace(/\s/g, '').toLowerCase();
  });
  return formattedObject;
};
