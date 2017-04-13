module.exports = angular
  .module('healthReport.route', [])
  .config(function($stateProvider) {
    $stateProvider.state('main.healthReport', {
      url: '/health_report',
      template: '<health-component></health-component>'
    });
  });
