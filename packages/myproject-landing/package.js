Package.describe({
  name: 'myproject:landing',
  version: '1.0.0',
  summary: 'Landing page umbrella package',
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');

  api.imply([
    'myproject:lib',
    'myproject:core',
    'myproject:landing-ui',
    'myproject:app-styles'
  ], ['client', 'server']);

});
