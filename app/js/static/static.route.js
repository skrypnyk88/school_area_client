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
<<<<<<< 699e9b37f1d13ef6c9a01fdab584884a4e8468d9
=======

>>>>>>> LVRUBYM-339: Fix injections
