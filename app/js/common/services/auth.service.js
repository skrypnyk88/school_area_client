var authResource =  require('./../resources/auth.resource.js');

module.exports = angular
  .module('auth.service', [
    authResource.name
  ])
  .factory('auth', AuthFactory);

AuthFactory.$inject = [
  '$state',
  '$mdToast',
  'localStorageService',
  'globalSettings',
  'errorMessages',
  'authResource'
];

function AuthFactory(
  $state,
  $mdToast,
  localStorageService,
  globalSettings,
  errorMessages,
  authResource
) {
  var toState;
  var fromState;
  var savedState = globalSettings.MAIN_STATE;
  var authenticated = !!localStorageService.get('token');

  var service = {
    authorization: authorization,
    authenticate: authenticate,
    refreshToken: refreshToken,
    saveToken: saveToken,
    logout: logout,
    removeToken: removeToken,
    redirect: redirect,
    getErrorMsg: getErrorMsg,
    toggleErrorMsg: toggleErrorMsg
  };

  return service;

  function authorization(event, to, from) {
    toState = to.name ? to : globalSettings.MAIN_STATE;
    fromState = from.name ? from : globalSettings.MAIN_STATE;

    toState.skipAuth && authenticated && service.redirect(event, fromState);
    toState.skipAuth || authenticated || service.redirect(event, globalSettings.LOGIN_STATE);

    if (!toState.skipAuth && authenticated) {
      savedState = toState;
      service.refreshToken();
    }
  }

  function authenticate(user) {
    authResource.authenticate(user).$promise.then(
      function(response) {
        service.saveToken(response);
        $state.go(savedState);
      },
      function(response) {
        service.toggleErrorMsg(response);
      });
  }

  function refreshToken() {
    authResource.refreshToken().$promise.then(
      service.saveToken,
      function(response) {
        service.toggleErrorMsg(response);
        service.removeToken();
      });
  }

  function saveToken(response) {
    authenticated = true;
    localStorageService.set('token', response.headers()['auth-token']);
  }

  function logout() {
    savedState = globalSettings.MAIN_STATE;
    service.removeToken();
  }

  function removeToken() {
    authenticated = false;
    localStorageService.remove('token');
    $state.go(globalSettings.LOGIN_STATE);
  }

  function redirect(event, to) {
    event.preventDefault();
    $state.go(to);
  }

  function getErrorMsg(status) {
    var errors = {
      401: errorMessages.NO_AUTH,
      419: errorMessages.AUTH_TIMEOUT
    };
    return errors[status];
  }

  function toggleErrorMsg(response) {
    var msg = service.getErrorMsg(response.status);

    $mdToast.show({
      template: '<md-toast><div class="md-toast-content">' +
                  msg +
                '</div></md-toast>',
      position: 'top right'
    });
  }
}
