module.exports = angular
  .module('myDayReport.route', [])
  .config(['$stateProvider',
    function($stateProvider) {
      $stateProvider.state('main.myDayReport', {
        url: '/my-day-report',
        template: '<my-day-report></my-day-report>'
      });
    }]);
