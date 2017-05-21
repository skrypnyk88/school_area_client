var myDayReportComponent = require('./components/myDayReport.component.js');
var myDayReportRoute = require('./myDayReport.route.js');

module.exports = angular
  .module('myDayReport', [
    myDayReportComponent.name,
    myDayReportRoute.name
    ]);
