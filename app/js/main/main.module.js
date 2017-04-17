var mainComponent = require('./components/main.component.js');
var mainRoute = require('./main.route.js');
var presenceReportModule = require('./../presenceReport/presenceReport.module.js');
var bottleReportModule = require('.././bottle_report/bottle_report.module.js');
var loginModule = require('./../login/login.module.js');
require('../../css/style.scss');

module.exports = angular
  .module('main', [
    mainComponent.name,
    mainRoute.name,
    loginModule.name,
    presenceReportModule.name,
    bottleReportModule.name
  ])
  .config(function($mdThemingProvider) {
    $mdThemingProvider
      .theme('default')
      .primaryPalette('light-green')
      .accentPalette('deep-purple')
      .warnPalette('red')
      .backgroundPalette('grey');
  });
