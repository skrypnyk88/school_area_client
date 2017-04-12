module.exports = angular
  .module('presenceReport.route', [])
  .config(function($stateProvider) {
    $stateProvider.state('main.presence', {
      url: '/presence_report',
      template: '<presence-component></presence-component>'
    });
  });
