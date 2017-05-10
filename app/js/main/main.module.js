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
<<<<<<< 432dd6448ea5a85579652742e0f542a28624147a
<<<<<<< 5aa93ff66840d81756341fcc2ce5b06387f4ab36
>>>>>>> LVRUBYM-242:added component
=======
=======
var toggleMessage = require('./../common/services/toggleMessage/toggleMessage.service.js');
<<<<<<< 16a7a21a21fa4e6b69535f96494473fefcbeeacf
<<<<<<< 6d4cd144a329ea7a46ad55d43263a7810d77de69
>>>>>>> LVRUBYM-351: Add toggleMessage service

>>>>>>> LVRUBYM-328:added files
=======
var bottleReportModule = require('.././bottle_report/bottle_report.module.js');
	  
>>>>>>> LVRUBYM-221:Add module,components,services,resources to bottle report
require('../../css/style.scss');
=======
var groupListModule = require('./../groupList/groupList.module.js');
var bottleReportModule = require('.././bottleReport/bottleReport.module.js');
	  require('../../css/style.scss');
>>>>>>> LVRUBYM-221:Fixed file's name
=======
=======
>>>>>>> LVRUBYM-221:Changed template
=======
>>>>>>> LVRUBYM-221:Changed fail response
var bottleReportModule = require('.././bottleReport/bottleReport.module.js');
var sideBarModule = require('./../sidebar/sidebar.module.js');

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
<<<<<<< 16a7a21a21fa4e6b69535f96494473fefcbeeacf
<<<<<<< f850bfdd973ddd81d4c9a8b834d6fb260d39f714
<<<<<<< b1263744d5dbac2df9f7478c666c2beb7b7604de
<<<<<<< b58d66a93707ee896c6d162c5c842ea61db242b2
    toggleMessage.name,
=======
=======
<<<<<<< 8e755c941e1599e7941a3fe118b61f581682a2f1
>>>>>>> LVRUBYM-221:Changed template
<<<<<<< 110a2349bbde235cfd99b7d4f923344a087a6a29
>>>>>>> LVRUBYM-221:Added validation and failure response
    staticModule.name,
    sideBarModule.name,
    studentService.name,
    forgotPasswordModule.name,
    resetPasswordModule.name
=======
=======
>>>>>>> LVRUBYM-221:Changed fail response
    staticModule.name,
<<<<<<< f422c9c7864c23ac4a4cf2c30f5d463d878b9bcd
<<<<<<< 432dd6448ea5a85579652742e0f542a28624147a
    myDayReportModule.name
>>>>>>> LVRUBYM-242:added component
=======
    myDayReportModule.name,
<<<<<<< 6d4cd144a329ea7a46ad55d43263a7810d77de69
    toggleMessage.name
>>>>>>> LVRUBYM-351: Add toggleMessage service
=======
    toggleMessage.name,
<<<<<<< e07b464d152d3e24981a7fada5ff913310f40da3
<<<<<<< 4ac0622ae5f72bcd5cc1cb348264d9c657b9d123
    bottleReportModule.name
<<<<<<< 16a7a21a21fa4e6b69535f96494473fefcbeeacf
<<<<<<< f850bfdd973ddd81d4c9a8b834d6fb260d39f714
>>>>>>> LVRUBYM-221:Add module,components,services,resources to bottle report
=======
=======
    staticModule.name
>>>>>>> LVRUBYM-221:Changed template
>>>>>>> LVRUBYM-221:Changed template
=======
>>>>>>> LVRUBYM-221:Changed fail response
=======
>>>>>>> LVRUBYM-344: Create main template style
=======
=======
    toggleMessage.name,
    myDayReportModule.name,
>>>>>>> LVRUBYM-349:Fixed jscs
    sideBarModule.name
>>>>>>> LVRUBYM-349:Create sidebar component
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
<<<<<<< 699e9b37f1d13ef6c9a01fdab584884a4e8468d9
  .config(function($mdThemingProvider) {
    $mdThemingProvider
      .theme('default')
      .primaryPalette('light-green')
      .accentPalette('deep-purple')
      .warnPalette('red')
      .backgroundPalette('grey');
  });
>>>>>>> LVRUBYM-328:moved config and function to main component
=======
  .config(['$mdThemingProvider',
    function($mdThemingProvider) {
      $mdThemingProvider
        .theme('default')
        .primaryPalette('light-green')
        .accentPalette('deep-purple')
        .warnPalette('red')
        .backgroundPalette('grey');
    }]);
>>>>>>> LVRUBYM-339: Fix injections
