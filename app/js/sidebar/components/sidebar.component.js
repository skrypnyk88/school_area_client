var constants = require('./../../common/constants.js');

module.exports = angular
  .module('sidebar.component', [
    constants.name,
    'ngSidebarJS'
  ])
  .component('sideBar', {
    templateUrl: './app/js/sidebar/components/sidebar.template.html',
    controller: SideBarController
  });

SideBarController.$inject = [
  'menuItems',
  'currentUser',
  '$filter',
  '$translate',
  '$scope'
];

function SideBarController(menuItems, currentUser, $filter, $translate, $scope) {
  var ctrl = this;
  ctrl.menuItems = menuItems;
  ctrl.activeMenu = localStorage.getItem('activeMenu') || 0;
  ctrl.activeSubmenu = localStorage.getItem('activeSubmenu') || 0;
  console.log(ctrl.menuItems)
  ctrl.setActiveMenu = function(index) {
    ctrl.activeMenu = index;
    localStorage.setItem('activeMenu', index);

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

  $scope.$watch(
    function() { return $filter('translate')('sidebar.TEACHER_REPORT'); },
    function(newval) { ctrl.menuItems[0].name = newval; }
  );

  $scope.$watch(
    function() { return $filter('translate')('sidebar.PARENTS_SHARING'); },
    function(newval) { ctrl.menuItems[1].name = newval; }
  );

  $scope.$watch(
    function() { return $filter('translate')('sidebar.MESSAGES'); },
    function(newval) { ctrl.menuItems[2].name = newval; }
  );

  $scope.$watch(
    function() { return $filter('translate')('sidebar.NOTIFICATIONS'); },
    function(newval) { ctrl.menuItems[3].name = newval; }
  );

  $scope.$watch(
    function() { return $filter('translate')('sidebar.CALENDAR'); },
    function(newval) { ctrl.menuItems[4].name = newval; }
  );

  $scope.$watch(
    function() { return $filter('translate')('sidebar.PHOTO_GALERY'); },
    function(newval) { ctrl.menuItems[5].name = newval; }
  );

  $scope.$watch(
    function() { return $filter('translate')('sidebar.REWARDS'); },
    function(newval) { ctrl.menuItems[6].name = newval; }
  );

  $scope.$watch(
    function() { return $filter('translate')('sidebar.CONTACTS'); },
    function(newval) { ctrl.menuItems[7].name = newval; }
  );

  $scope.$watch(
    function() { return $filter('translate')('submenu.PRESENCE'); },
    function(newval) { ctrl.menuItems[0].submenu[0].name = newval; }
  );

  $scope.$watch(
    function() { return $filter('translate')('submenu.HEALTH'); },
    function(newval) { ctrl.menuItems[0].submenu[1].name = newval; }
  );

  $scope.$watch(
    function() { return $filter('translate')('submenu.BOTTLE'); },
    function(newval) { ctrl.menuItems[0].submenu[2].name = newval; }
  );

  $scope.$watch(
    function() { return $filter('translate')('submenu.MEALS'); },
    function(newval) { ctrl.menuItems[0].submenu[3].name = newval; }
  );

  $scope.$watch(
    function() { return $filter('translate')('submenu.POTTY'); },
    function(newval) { ctrl.menuItems[0].submenu[4].name = newval; }
  );

  $scope.$watch(
    function() { return $filter('translate')('submenu.NAP'); },
    function(newval) { ctrl.menuItems[0].submenu[5].name = newval; }
  );

  $scope.$watch(
    function() { return $filter('translate')('submenu.REWARDS'); },
    function(newval) { ctrl.menuItems[0].submenu[6].name = newval; }
  );

  $scope.$watch(
    function() { return $filter('translate')('submenu.PERSONAL_NOTES'); },
    function(newval) { ctrl.menuItems[0].submenu[7].name = newval; }
  );

  $scope.$watch(
    function() { return $filter('translate')('submenu.CLASS_NOTES'); },
    function(newval) { ctrl.menuItems[0].submenu[8].name = newval; }
  );
};
