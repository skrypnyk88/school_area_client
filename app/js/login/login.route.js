module.exports = angular
  .module('login.route', [])
  .config(function($stateProvider) {
    $stateProvider.state({
      url: '/login',
      name: 'login',
      template: '<login-component></login-component>',
      skipAuth: true
    });
  });
