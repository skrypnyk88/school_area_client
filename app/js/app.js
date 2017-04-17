var angular = require('angular');
var mainModule = require('./main/main.module.js');
var constantsModule = require('./common/constants.js');
var tokenInjector = require('./common/services/tokenInjector.service.js');
var vendorModule = require('./requirements.js');
var healthReportModule = require('./healthReport/healthReport.module.js');
var healthReportResourceModule = require('./common/resources/healthReport.resource.js');

angular
  .module('schoolArea', [
    vendorModule.name,
    constantsModule.name,
    mainModule.name,
    tokenInjector.name,
    healthReportResourceModule.name,
    healthReportModule.name
  ])
  .config(
    function($locationProvider, $httpProvider/*, localStorageServiceProvider*/) {
      $locationProvider.html5Mode(true);
    //  localStorageServiceProvider.setPrefix('schoolArea');
    //  $httpProvider.interceptors.push('tokenInjector');
    })
/*  .run(['$rootScope', '$state', 'auth',
    function($rootScope, $state, auth) {
      $rootScope.$on('$stateChangeStart',
        function(event, toState, toParams, fromState) {
          auth.authorization(event, toState, fromState);
        });
    }])*/;
