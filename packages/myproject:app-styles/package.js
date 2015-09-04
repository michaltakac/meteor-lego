/**
 * App stylesheets.
 *
 */
Package.describe({
  name: 'myproject:app-styles',
  summary: 'App styles package.',
  version: '1.0.0',
  git: ''
});

Package.onUse(function(api) {

  api.versionsFrom('METEOR@1.1.0.3');

  // Here you add all your modules, and also define the load order by the way
  // you order them in this array. MAKE SURE app:lib always goes first!
  var packages = [
    'myproject:lib', // no dependencies
    'myproject:core', // no dependencies
  ];

  api.use(packages); // all code => this package

  api.imply(packages); // this package => application

  // client
  api.addFiles([
    'lib/client/stylesheets/base/global.less',
  ], 'client');

});

