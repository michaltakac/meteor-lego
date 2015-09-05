// App: Core (3rd layer)
//
// * This is where your modules are built into an application. The only package
// you should have to `meteor add` is  `metepor add app:core`. This package
// also acts as an umbrella by including alll your app's dependencies/code, and
// alko acts as a namespace manager.
//
// *  In each module, you should have exported a single global variable with
//    anything that we might neeed to access. Here in app:core, move these
//    exports into the 'App' global namespace.

Package.describe({
  name: 'myproject:core',
  summary: 'Core application package.',
  version: '1.0.0',
  git: ''
});

Package.onUse(function(api) {

  api.versionsFrom('METEOR@1.1.0.3');

  // Here you add all your modules, and also define the load order by the way
  // you order them in this array. MAKE SURE app:lib always goes first!
  var packages = [
    'myproject:lib', // no dependencies
  ];

  api.use(packages); // all code => this package

  api.imply(packages); // this package => application

  // client
  api.addFiles([
    'lib/helpers/helpers-ui.js',
    'lib/helpers/stringHelpers.js',
    'lib/client/compatibility/bootstrap.js',
    'lib/client/index.html',
    'lib/client/layouts/loading.html',
    'lib/client/layouts/notFound.html',
  ], 'client');

  // client
  api.addFiles([
    'lib/accounts/config.js'
  ]);

  // Routing
  api.addFiles([
    'lib/router/config.js',
    'lib/router/meta.js'
  ], 'client');

  // public files
  api.addFiles([
    'public/images/favicons/apple-touch-icon-114x114.png',
    'public/images/favicons/apple-touch-icon-120x120.png',
    'public/images/favicons/apple-touch-icon-144x144.png',
    'public/images/favicons/apple-touch-icon-152x152.png',
    'public/images/favicons/apple-touch-icon-57x57.png',
    'public/images/favicons/apple-touch-icon-60x60.png',
    'public/images/favicons/apple-touch-icon-72x72.png',
    'public/images/favicons/apple-touch-icon-76x76.png',
    'public/images/favicons/apple-touch-icon.png',
    'public/images/favicons/apple-touch-icon-precomposed.png',
    'public/images/favicons/browserconfig.xml',
    'public/images/favicons/favicon-160x160.png',
    'public/images/favicons/favicon-16x16.png',
    'public/images/favicons/favicon-192x192.png',
    'public/images/favicons/favicon-32x32.png',
    'public/images/favicons/favicon-96x96.png',
    'public/images/favicons/favicon.ico',
    'public/images/favicons/mstile-144x144.png',
    'public/images/favicons/mstile-150x150.png',
    'public/images/favicons/mstile-310x150.png',
    'public/images/favicons/mstile-310x310.png',
    'public/images/favicons/mstile-70x70.png'
  ], 'client');


  // Last but not least.. (optional)
  api.export([
    
  ]);

});

Package.onTest(function (api) {
  api.use([
    'myproject:core',
    'sanjo:jasmine@0.18.0',
    'test-helpers',
    'templating',
    'reactive-dict'
  ], ['client']);

});
