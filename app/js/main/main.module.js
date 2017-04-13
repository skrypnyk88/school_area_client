var mainComponent = require('./components/main.component.js');
var mainRoute = require('./main.route.js');
var loginModule = require('./../login/login.module.js');
var presenceReportModule = require('./../presenceReport/presenceReport.module.js');
var studentModule = require('./../student/student.module.js');
var groupService = require('./../common/services/group.service.js');
var staticModule = require('./../static/static.module.js');
var myDayReportModule = require('./../myDayReport/myDayReport.module.js');
require('../../css/style.scss');

module.exports = angular
  .module('main', [
    mainComponent.name,
    mainRoute.name,
    loginModule.name,
    presenceReportModule.name,
    studentModule.name,
    groupService.name,
    staticModule.name,
    myDayReportModule.name
  ])
  .config(function($mdThemingProvider) {
    $mdThemingProvider
      .theme('default')
      .primaryPalette('light-green')
      .accentPalette('deep-purple')
      .warnPalette('red')
      .backgroundPalette('grey');
  });
