module.exports = angular
  .module('pottyReport.route', [])
  .config(function($stateProvider) {
    $stateProvider.state({
      url: '/potty_report',
      name: 'main.pottyReport',
      template: '<potty-component></potty-component>'
    });
  });
