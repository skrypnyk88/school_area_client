module.exports = angular
  .module('static.route', [])
<<<<<<< HEAD
  .config(['$stateProvider',
    function($stateProvider) {
      $stateProvider.state('main.static', {
        url: '/static',
        name: 'main.static',
        templateUrl: './app/js/static/components/static.template.html'
      });
    }]);
<<<<<<< HEAD
=======
=======
  .config(function($stateProvider) {
    $stateProvider.state('main.static', {
      url: '/static',
      name: 'main.static',
      templateUrl: './app/js/static/components/static.template.html'
    });
  });
>>>>>>> LVRUBYM-344: Create main template style

>>>>>>> LVRUBYM-344: Create main template style
