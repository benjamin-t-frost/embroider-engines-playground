/* eslint-env node */
'use strict';

const EngineAddon = require('ember-engines/lib/engine-addon');

module.exports = EngineAddon.extend({
  name: 'not-home-engine',

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
