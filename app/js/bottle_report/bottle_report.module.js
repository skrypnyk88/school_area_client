var bottleReportComponent = require('./components/bottle_report.component.js');
var bottleReportRoute = require('./bottle_report.route.js');
require('../../css/style.scss');

module.exports = angular
.module('bottleReport', [bottleReportComponent.name, bottleReportRoute.name]);
