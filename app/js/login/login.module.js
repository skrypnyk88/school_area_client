var loginRoute = require('./login.route.js');
var loginComponent = require('./components/login.component.js');
var authService = require('./../common/services/auth.service.js');

module.exports = angular
  .module('login', [
    loginRoute.name,
    loginComponent.name,
    authService.name
  ]);
