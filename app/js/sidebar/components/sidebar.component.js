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
  'menuItems',
  'menuItemss',
  'currentUser'
];

function SideBarController(menuItems, menuItemss, currentUser) {
  var ctrl = this;
debugger;
  ctrl.menuItems = menuItems;
  ctrl.menuItemss = menuItemss;
  ctrl.activeMenu = localStorage.getItem('activeMenu') || 0;
  ctrl.activeSubmenu = localStorage.getItem('activeSubmenu') || 0;
  ctrl.loc = currentUser.locale;
    console.log(ctrl.loc);
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
