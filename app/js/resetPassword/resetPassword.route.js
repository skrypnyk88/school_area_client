module.exports = angular
.module('resetPassword.route', [])
.config(function($stateProvider) {
  $stateProvider.state('resetPassword', {
    url: '/passwords/reset?reset_password_token',
    template: '<reset-component></reset-component>',
    skipAuth: true
  });
});
