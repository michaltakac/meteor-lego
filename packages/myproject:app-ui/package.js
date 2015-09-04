/**
 * App UI.
 *
 */
Package.describe({
  name: 'myproject:app-ui',
  summary: 'App UI package.',
  version: '1.0.0',
  git: ''
});

Package.onUse(function(api) {

  api.versionsFrom('METEOR@1.1.0.3');

  // Here you add all your modules, and also define the load order by the way
  // you order them in this array. MAKE SURE app:lib always goes first!
  var packages = [
    'myproject:lib', // no dependencies
    'myproject:core'
  ];

  api.use(packages); // all code => this package

  api.imply(packages); // this package => application

  // client
  api.addFiles([
    'lib/client/home.html',
    'lib/client/home.js',
    'lib/client/dashboard.html',
    'lib/client/dashboard.js',
  ], 'client');

  // routing
  api.addFiles([
    'lib/router/routes.js'
  ], ['client', 'server']);

  // Last but not least.. (optional)
  api.export([

  ]);

});

Package.onTest(function (api) {
  api.use([
    'myproject:app-ui',
    'sanjo:jasmine@0.18.0'
  ], ['client']);

});
