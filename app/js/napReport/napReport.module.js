var napReportComponent = require('./components/napReport.component.js');
var napReportRoute = require('./napReport.route.js');

module.exports = angular
  .module('napReport', [
    napReportComponent.name,
    napReportRoute.name
  ]);
