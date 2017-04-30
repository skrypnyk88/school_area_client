var pottyReportComponent = require('./components/pottyReport.component.js');
var pottyReportRoute = require('./pottyReport.route.js');

module.exports = angular
  .module('pottyReport', [
    pottyReportComponent.name,
    pottyReportRoute.name
  ]);
