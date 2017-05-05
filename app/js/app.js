var angular = require('angular');
var mainModule = require('./main/main.module.js');
var constantsModule = require('./common/constants.js');
var tokenInjector = require('./common/services/tokenInjector.service.js');
var vendorModule = require('./requirements.js');
var valuesModule = require('./common/values.js');

angular
  .module('schoolArea', [
    vendorModule.name,
    constantsModule.name,
    valuesModule.name,
    mainModule.name,
    tokenInjector.name
  ])
 .config(['$locationProvider', '$httpProvider', 'localStorageServiceProvider',
    function($locationProvider, $httpProvider, localStorageServiceProvider) {
      $locationProvider.html5Mode(true);
      localStorageServiceProvider.setPrefix('schoolArea');
      $httpProvider.interceptors.push('tokenInjector');
<<<<<<< 5aa93ff66840d81756341fcc2ce5b06387f4ab36
    }])
=======
    })
<<<<<<< 5f08931b1824729a65c08636eb4467c854ebded3
  .config(['$translateProvider', function($translateProvider) {
    $translateProvider.useStaticFilesLoader({
      prefix: 'app/js/i18n/locale-',
      suffix: '.json'
    });
    $translateProvider.preferredLanguage('en');
  }])
  .controller('Ctrl', ['$translate', function($translate) {
    var ctrl = this;
    ctrl.changeLanguage = function(langKey) {
      $translate.use(langKey);
    };
  }])
>>>>>>> LVRUBYM-328:added files
=======
>>>>>>> LVRUBYM-328:moved config and function to main component
  .run(['$rootScope', '$state', 'auth',
    function($rootScope, $state, auth) {
      $rootScope.$on('$stateChangeStart',
        function(event, toState, toParams, fromState) {
          auth.authorization(event, toState, fromState);
        });
    }]);
