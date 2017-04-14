module.exports = angular
  .module('myDayReport.route', [])
  .config(function($stateProvider) {
    $stateProvider.state({
      url: '/my-day-report',
      name: 'main.myDayReport',
      template: '<my-day-component></my-day-component>'
    });
  });
