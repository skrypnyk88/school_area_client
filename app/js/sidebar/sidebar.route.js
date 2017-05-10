module.exports = angular
  .module('sidebar.route', [])
  .config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/presence_report');
<<<<<<< e07b464d152d3e24981a7fada5ff913310f40da3
    $stateProvider.state('sidebar', {
=======
    $stateProvider.state('main.sidebar', {
      name: 'main.sidebar',
>>>>>>> LVRUBYM-349:Create sidebar component
      template: '<side-bar></side-bar>'
    });
  }]);
