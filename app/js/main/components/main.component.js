var authService = require('./../../common/services/auth.service.js');

module.exports = angular

  .module('main.component', [
    authService.name
  ])
  .component('mainComponent', {
    templateUrl: './app/js/main/components/main.template.html',
    controller: MainController
  });

MainController.$inject = ['auth'];

function MainController(auth) {
  var ctrl = this;

  ctrl.logout = function() {
    auth.logout();
  };
};

