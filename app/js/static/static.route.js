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
<<<<<<< HEAD
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
=======
>>>>>>> LVRUBYM-349:Fixed jscs
