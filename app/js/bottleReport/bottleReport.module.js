var bottleReportComponent = require('./components/bottleReport.component.js');
var bottleReportRoute = require('./bottleReport.route.js');

module.exports = angular
.module('bottleReport', [
  bottleReportComponent.name,
  bottleReportRoute.name
]);
