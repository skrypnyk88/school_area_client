var resetPasswordComponent = require('./components/resetPassword.component.js');
var resetPasswordRoute = require('./resetPassword.route.js');

module.exports = angular
  .module('resetPassword', [
    resetPasswordComponent.name,
    resetPasswordRoute.name
  ]);
