var profileComponent = require('./components/profile.component.js');
var profileRoute = require('./profile.route.js');

module.exports = angular
  .module('profile', [
    profileComponent.name,
    profileRoute.name
  ]);
