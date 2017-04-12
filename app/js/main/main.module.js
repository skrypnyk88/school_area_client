var mainComponent = require('./components/main.component.js');
var mainRoute = require('./main.route.js');
var presenceReportModule = require('./../presenceReport/presenceReport.module.js');
require('../../css/style.scss');

module.exports = angular
  .module('main', [
    mainComponent.name,
    mainRoute.name,
    presenceReportModule.name
  ]);
