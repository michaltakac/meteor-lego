/**
 * Landing UI.
 *
 */
Package.describe({
  name: 'myproject:landing-ui',
  summary: 'App UI package.',
  version: '1.0.0',
  git: ''
});

Package.onUse(function(api) {

  api.versionsFrom('METEOR@1.1.0.3');

  var packages = [
    'myproject:lib', // no dependencies
    'myproject:core'
  ];

  api.use(packages); // all code => this package

  api.imply(packages); // this package => application

  // client
  api.addFiles([
    'lib/client/layouts/_landingHeader.html',
    'lib/client/layouts/_landingHeader.js',
    'lib/client/layouts/_landingFooter.html',
    'lib/client/layouts/landingLayout.html',
    'lib/client/home.html',
    'lib/client/home.js'
  ], 'client');

  // routing
  api.addFiles([
    'lib/router/routes.js'
  ], 'client');

  // Last but not least.. (optional)
  api.export([

  ]);

});

Package.onTest(function (api) {
  api.use([
    'myproject:landing-ui',
    'sanjo:jasmine@0.18.0'
  ], ['client']);

});
