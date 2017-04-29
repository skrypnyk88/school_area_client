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
  'currentGroupDay',
  '$translate'
];

function MainController($scope, $state, auth, currentGroupDay, $translate) {
  var ctrl = this;

<<<<<<< 401e0eef0b897db26c8bb33bd841bd73d15e1127
  ctrl.currentGroupDay = currentGroupDay;
  ctrl.logout = function() {
    auth.logout();
    localStorage.removeItem('activeMenu');
    localStorage.removeItem('activeSubmenu');
  };

  ctrl.changeLanguage = function(langKey) {
      $translate.use(langKey);
    };

  $scope.$watch(
    function() { return currentGroupDay.group_id; },
    function() { $state.reload($state.current); }
  );
};
