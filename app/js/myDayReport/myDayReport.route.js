module.exports = angular
  .module('myDayReport.route', [])
  .config(function($stateProvider) {
    $stateProvider.state({
      url: '/my-day-report',
      name: 'main.myDayReport',
      template: '<my-day-report></my-day-report>'
    });
  });
