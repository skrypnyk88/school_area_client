var healthReportComponent = require('./components/healthReport.component.js');
var healthReportRoute = require('./healthReport.route.js');

module.exports = angular
  .module('healthReport', [
    healthReportComponent.name,
    healthReportRoute.name
  ]);
