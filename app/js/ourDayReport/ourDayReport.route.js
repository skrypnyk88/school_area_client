module.exports = angular
  .module('ourDayReport.route', [])
  .config(function($stateProvider) {
    $stateProvider.state('main.ourDayReport', {
      url: '/our_day_report',
      template: '<our-day-report-component></our-day-report-component>'
    });
  });
