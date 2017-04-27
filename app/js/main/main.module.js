var mainComponent = require('./components/main.component.js');
var mainRoute = require('./main.route.js');
var loginModule = require('./../login/login.module.js');
var presenceReportModule = require('./../presenceReport/presenceReport.module.js');
var studentModule = require('./../student/student.module.js');
var groupService = require('./../common/services/group.service.js');
var staticModule = require('./../static/static.module.js');
var myDayReportModule = require('./../myDayReport/myDayReport.module.js');
var toggleMessage = require('./../common/services/toggleMessage/toggleMessage.service.js');
var bottleReportModule = require('.././bottleReport/bottleReport.module.js');
var sideBarModule = require('./../sidebar/sidebar.module.js');
var studentService = require('./../common/services/student.service.js');
var profileModule = require('./../profile/profile.module.js');

require('../../css/style.scss');

module.exports = angular
  .module('main', [
    mainComponent.name,
    mainRoute.name,
    loginModule.name,
    presenceReportModule.name,
    studentModule.name,
    bottleReportModule.name,
    groupService.name,
    staticModule.name,
    toggleMessage.name,
    myDayReportModule.name,
    sideBarModule.name,
    studentService.name,
    profileModule.name
  ])
  .config(['$translateProvider', function($translateProvider) {
    $translateProvider.useStaticFilesLoader({
      prefix: 'app/js/i18n/locale-',
      suffix: '.json'
    });
    $translateProvider.preferredLanguage('en');
  }])
  .config(['$mdThemingProvider',
    function($mdThemingProvider) {
      $mdThemingProvider
        .theme('default')
        .primaryPalette('light-green')
        .accentPalette('deep-purple')
        .warnPalette('red')
        .backgroundPalette('grey');
    }]);
