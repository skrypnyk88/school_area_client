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
  'menuItems'
];

function MainController($scope, $state, auth, currentGroupDay, menuItems) {
  var ctrl = this;

  ctrl.currentGroupDay = currentGroupDay;
  ctrl.menuItems = menuItems;
  ctrl.activeMenu = localStorage.getItem('activeMenu') || 0;
  ctrl.activeSubmenu = localStorage.getItem('activeSubmenu') || 0;
  ctrl.submenuOpened = false;
  ctrl.selectedDate = new Date();
  ctrl.monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  ctrl.dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  ctrl.setActiveMenu = function(index) {
    ctrl.activeMenu = index;
    localStorage.setItem('activeMenu', index);

    //if Teacher report is not chosen
    if (index == 0) {
      ctrl.submenuOpened = !ctrl.submenuOpened;
    } else {
      ctrl.activeSubmenu = -1;
      ctrl.submenuOpened = false;
    }
  };

  ctrl.setActiveSubmenu = function(index) {
    ctrl.activeMenu = 0;
    ctrl.activeSubmenu = index;
    localStorage.setItem('activeSubmenu', index);
  };

  ctrl.nextDate = function() {
    ctrl.selectedDate.setDate(ctrl.selectedDate.getDate() + 1);
  };

  ctrl.pastDate = function() {
    ctrl.selectedDate.setDate(ctrl.selectedDate.getDate() - 1);
  };

  ctrl.logout = function() {
    auth.logout();
    localStorage.removeItem('activeMenu');
    localStorage.removeItem('activeSubmenu');
  };

  $scope.$watch(
    function() { return currentGroupDay.group_id; },
    function() { $state.reload($state.current); }
  );
};
