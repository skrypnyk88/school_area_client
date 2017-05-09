module.exports = angular
  .module('static.route', [])
<<<<<<< 8e755c941e1599e7941a3fe118b61f581682a2f1
  .config(['$stateProvider',
    function($stateProvider) {
      $stateProvider.state('main.static', {
        url: '/static',
        name: 'main.static',
        templateUrl: './app/js/static/components/static.template.html'
      });
    }]);

=======
  .config(function($stateProvider) {
    $stateProvider.state('main.static', {
      url: '/static',
      name: 'main.static',
      templateUrl: './app/js/static/components/static.template.html'
    });
  });
>>>>>>> LVRUBYM-221:Changed template
