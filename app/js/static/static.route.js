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
<<<<<<< 699e9b37f1d13ef6c9a01fdab584884a4e8468d9
=======

<<<<<<< f850bfdd973ddd81d4c9a8b834d6fb260d39f714
>>>>>>> LVRUBYM-339: Fix injections
=======
=======
  .config(function($stateProvider) {
    $stateProvider.state('main.static', {
      url: '/static',
      name: 'main.static',
      templateUrl: './app/js/static/components/static.template.html'
    });
  });
>>>>>>> LVRUBYM-221:Changed template
>>>>>>> LVRUBYM-221:Changed template
