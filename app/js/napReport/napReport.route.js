module.exports = angular
  .module('napReport.route', [])
  .config(['$stateProvider',
    function($stateProvider) {
      $stateProvider.state('main.napReport', {
        url: '/nap_report',
        template: '<nap-component></nap-component>'
      });
    }]);
