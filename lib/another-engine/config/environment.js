/* eslint-env node */
'use strict';

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'another-engine',
    environment,
  };

  return ENV;
};
