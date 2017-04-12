module.exports = angular
  .module('main.route', [])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/presence_report');
    $stateProvider.state('main', {
      name: 'main',
      template: '<main-component></main-component>'
    });
  });
