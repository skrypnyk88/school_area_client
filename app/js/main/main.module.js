var mainComponent = require('./components/main.component.js');
var mainRoute = require('./main.route.js');
var loginModule = require('./../login/login.module.js');
var presenceReportModule = require('./../presenceReport/presenceReport.module.js');
var studentModule = require('./../student/student.module.js');
var groupService = require('./../common/services/group.service.js');
<<<<<<< 6591626350f205011fe4ba3afc8ffcf0c584d96b
var staticModule = require('./../static/static.module.js');
var toggleMessage = require('./../common/services/toggleMessage/toggleMessage.service.js');
var bottleReportModule = require('.././bottle_report/bottle_report.module.js');
	  
require('../../css/style.scss');
=======
var groupListModule = require('./../groupList/groupList.module.js');
var bottleReportModule = require('.././bottleReport/bottleReport.module.js');
	  require('../../css/style.scss');
>>>>>>> LVRUBYM-221:Fixed file's name

module.exports = angular
  .module('main', [
    mainComponent.name,
    mainRoute.name,
    loginModule.name,
    presenceReportModule.name,
    studentModule.name,
    groupService.name,
    staticModule.name,
    toggleMessage.name,
    bottleReportModule.name
  ])
  .config(['$mdThemingProvider',
    function($mdThemingProvider) {
      $mdThemingProvider
        .theme('default')
        .primaryPalette('light-green')
        .accentPalette('deep-purple')
        .warnPalette('red')
        .backgroundPalette('grey');
    }]);
