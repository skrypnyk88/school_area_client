var forgotPasswordComponent = require('./components/forgotPassword.component.js');
var forgotPasswordRoute = require('./forgotPassword.route.js');

module.exports = angular
  .module('forgotPassword', [
    forgotPasswordComponent.name,
    forgotPasswordRoute.name
  ]);
