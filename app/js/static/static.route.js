module.exports = angular
  .module('static.route', [])
  .config(['$stateProvider',
    function($stateProvider) {
      $stateProvider.state('main.static', {
        url: '/static',
        name: 'main.static',
        templateUrl: './app/js/static/components/static.template.html'
      });
    }]);

