import EmberRouter from '@embroider/router';

import config from 'host/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  // This does get code split but there is a sizable chunk that remains in the main chunk
  this.mount('routed-engine-one');

  // duplicates engine code in main chunk
  this.mount('routed-engine-two');
  this.route('split-route-one');
});
