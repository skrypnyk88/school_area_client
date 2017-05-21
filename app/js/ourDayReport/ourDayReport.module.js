var ourDayReportComponent = require('./components/ourDayReport.component');
var ourDayReportRoute = require('./ourDayReport.route.js');

module.exports = angular
  .module('ourDayReport', [
    ourDayReportComponent.name,
    ourDayReportRoute.name
    ]);
