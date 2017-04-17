module.exports = angular
  .module('presenceReport.route', [])
  .config(function($stateProvider) {
    $stateProvider.state('main.presenceReport', {
      url: '/presence_report',
      template: '<presence-component></presence-component>'
    });
  });
