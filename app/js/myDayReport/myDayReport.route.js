module.exports = angular
  .module('myDayReport.route', [])
  .config(function($stateProvider) {
    $stateProvider.state('main.myDayReport', {
      url: '/my-day-report',
      template: '<my-day-component></my-day-component>'
    });
  });
