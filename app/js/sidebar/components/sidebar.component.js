var constants = require('./../../common/constants.js');

module.exports = angular
  .module('sidebar.component', [
    constants.name
  ])
  .component('sideBar', {
    templateUrl: './app/js/sidebar/components/sidebar.template.html',
    controller: SideBarController
  });

SideBarController.$inject = [
  'menuItems'
];

function SideBarController(menuItems) {
  var ctrl = this;

  ctrl.menuItems = menuItems;
  ctrl.activeMenu = localStorage.getItem('activeMenu') || 0;
  ctrl.activeSubmenu = localStorage.getItem('activeSubmenu') || 0;

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
};
