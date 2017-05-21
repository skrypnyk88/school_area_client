module.exports = angular
  .module('profile.route', [])
  .config(function($stateProvider) {
    $stateProvider.state('main.profile', {
      url: '/profile',
      template: '<profile-component></profile-component>'
    });
  });
