'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const {
  createEmberCLIConfig,
  createWebpackConfig,
} = require('ember-cli-bundle-analyzer/create-config');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
    ...createEmberCLIConfig(),
    sourcemaps: {
      enabled: true,
    },
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  const { Webpack } = require('@embroider/webpack');
  return require('@embroider/compat').compatBuild(app, Webpack, {
    skipBabel: [
      {
        package: 'qunit',
      },
    ],
    packagerOptions: {
      webpackConfig: {
        // any custom webpack options you might have
        // ...createWebpackConfig(),
        plugins: [new BundleAnalyzerPlugin()],
        // cache: false,
        optimization: {
          splitChunks: {
            chunks: 'all',
          },
        },
      },
      staticAddonTestSupportTrees: true,
      staticAddonTrees: true,
      staticHelpers: true,
      staticModifiers: true,
      staticComponents: true,
      staticEmberSource: true,
      // splitAtRoutes: ['not-home-engine', 'another-engine', 'split-me-please'],
      splitAtRoutes: ['split-me-please'],
      skipBabel: [
        {
          package: 'qunit',
        },
      ],
    },
  });
};

// Try without engines
// Try both with a shared addon with an initializer
// give up
