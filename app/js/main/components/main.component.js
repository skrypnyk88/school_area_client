var authService = require('./../../common/services/auth.service.js');

module.exports = angular
  .module('main.component', [
    authService.name
  ])
  .component('mainComponent', {
    templateUrl: './app/js/main/components/main.template.html',
    controller: MainController,
    bindings: {
      groups: '<'
    }
  });

MainController.$inject = [
  '$scope',
  '$state',
  'auth',
  'currentGroupDay'
];

function MainController($scope, $state, auth, currentGroupDay) {
  var ctrl = this;

  ctrl.currentGroupDay = currentGroupDay;

  ctrl.logout = function() {
    auth.logout();
  };

  $scope.$watch(
    function() { return currentGroupDay.group_id; },
    function() { $state.reload($state.current); }
  );
};
