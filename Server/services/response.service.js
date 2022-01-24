// import express from 'express';

// TODO: bugsnag Crash Reporting
// const bugsnag = require('bugsnag');
//
// bugsnag.register('671f0e2ebacd38bee60ec84d5454647e', { autoNotify: true });
//
// const app = express();
// app.use(bugsnag.requestHandler);
// app.use(bugsnag.errorHandler);

/**
 * Prepares the success response.
 */
 function success(data) {
    return {
      status: 'Success',
      errorCode: 0,
      data
    };
  }
  
  /**
   * Prepares the failure response.
   */
  function failure(error) {
    // bugsnag.notify(new Error(error));
  
    return {
      status: 'Failure',
      errorCode: typeof error === 'number' ? error : 1,
      data: error
    };
  }
  
  /**
   * Prepares the failure response for a validation error.
   */
  function validationFailure(error) {
    return {
      status: 'Failure',
      errorCode: -1,
      data: error
    };
  }
  
  export default {
    success,
    failure,
    validationFailure
  };
  