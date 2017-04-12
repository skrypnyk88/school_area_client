var presenceReportComponent = require('./components/presenceReport.component.js');
var presenceReportRoute = require('./presenceReport.route.js');

module.exports = angular
  .module('presenceReport', [
    presenceReportComponent.name,
    presenceReportRoute.name
  ]);
