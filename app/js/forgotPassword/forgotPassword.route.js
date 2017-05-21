module.exports = angular
.module('forgotPassword.route', [])
.config(function($stateProvider) {
  $stateProvider.state('forgotPassword', {
    url: '/passwords/forgot',
    template: '<forgot-component></forgot-component>',
    skipAuth: true
  });
});
