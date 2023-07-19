/* eslint-env node */
'use strict';
// const faker = require('faker');
const EngineAddon = require('ember-engines/lib/engine-addon');

// This gets included in a test chunk -- likely okay since it won't be downloaded
// console.log(faker);

module.exports = EngineAddon.extend({
  name: 'another-engine',

  lazyLoading: Object.freeze({
    enabled: true,
  }),
  // eslint-disable-next-line ember/avoid-leaking-state-in-ember-objects
  babel: {
    plugins: [require.resolve('ember-auto-import/babel-plugin')],
  },
  isDevelopingAddon() {
    return true;
  },
});
