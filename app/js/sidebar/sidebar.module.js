var sideBarComponent = require('./components/sidebar.component.js');
var sideBarRoute = require('./sidebar.route.js');

module.exports = angular
  .module('sideBar', [
    sideBarComponent.name,
    sideBarRoute.name
  ]);
