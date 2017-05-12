module.exports = angular
  .module('sidebar.route', [])
  .config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/presence_report');
    $stateProvider.state('sidebar', {
      name: 'sidebar',
      template: '<side-bar></side-bar>'
    });
  }]);
