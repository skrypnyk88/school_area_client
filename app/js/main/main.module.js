var mainComponent = require('./components/main.component.js');
var mainRoute = require('./main.route.js');
var loginModule = require('./../login/login.module.js');
var forgotPasswordModule = require('./../forgotPassword/forgotPassword.module.js');
var resetPasswordModule = require('./../resetPassword/resetPassword.module.js');
var presenceReportModule = require('./../presenceReport/presenceReport.module.js');
var studentModule = require('./../student/student.module.js');
var groupService = require('./../common/services/group.service.js');
var staticModule = require('./../static/static.module.js');
<<<<<<< b58d66a93707ee896c6d162c5c842ea61db242b2
var toggleMessage = require('./../common/services/toggleMessage/toggleMessage.service.js');
var bottleReportModule = require('.././bottleReport/bottleReport.module.js');
var sideBarModule = require('./../sidebar/sidebar.module.js');
var studentService = require('./../common/services/student.service.js');

=======
var myDayReportModule = require('./../myDayReport/myDayReport.module.js');
<<<<<<< 5aa93ff66840d81756341fcc2ce5b06387f4ab36
>>>>>>> LVRUBYM-242:added component
=======

>>>>>>> LVRUBYM-328:added files
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
<<<<<<< b58d66a93707ee896c6d162c5c842ea61db242b2
    toggleMessage.name,
    staticModule.name,
    sideBarModule.name,
    studentService.name,
    forgotPasswordModule.name,
    resetPasswordModule.name
=======
    staticModule.name,
    myDayReportModule.name
>>>>>>> LVRUBYM-242:added component
  ])
<<<<<<< 5f08931b1824729a65c08636eb4467c854ebded3
  .config(['$mdThemingProvider',
    function($mdThemingProvider) {
      $mdThemingProvider
        .theme('default')
        .primaryPalette('light-green')
        .accentPalette('deep-purple')
        .warnPalette('red')
        .backgroundPalette('grey');
    }]);
=======
  .config(['$translateProvider', function($translateProvider) {
    $translateProvider.useStaticFilesLoader({
      prefix: 'app/js/i18n/locale-',
      suffix: '.json'
    });
    $translateProvider.preferredLanguage('en');
  }])
  .config(function($mdThemingProvider) {
    $mdThemingProvider
      .theme('default')
      .primaryPalette('light-green')
      .accentPalette('deep-purple')
      .warnPalette('red')
      .backgroundPalette('grey');
  });
>>>>>>> LVRUBYM-328:moved config and function to main component
