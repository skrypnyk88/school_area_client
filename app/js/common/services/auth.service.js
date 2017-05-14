var authResource =  require('./../resources/auth.resource.js');

module.exports = angular
  .module('auth.service', [
    authResource.name
  ])
  .factory('auth', AuthFactory);

AuthFactory.$inject = [
  '$state',
  'localStorageService',
  'globalSettings',
  'toggleMessage',
  'authResource',
  'currentUser'
];

function AuthFactory(
  $state,
  localStorageService,
  globalSettings,
  toggleMessage,
  authResource,
  currentUser
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
    saveCurrentUser: saveCurrentUser
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
        service.saveCurrentUser(response.data);
        $state.go(savedState);
      },
      function(response) {
        toggleMessage.showMessages(response.data.errors);
      });
  }

  function refreshToken() {
    authResource.refreshToken().$promise.then(
      function(response) {
        service.saveToken(response);
        service.saveCurrentUser(response.data);
      },
      function(response) {
        toggleMessage.showMessages(response.data.errors);
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

  function saveCurrentUser(response) {
    currentUser.first_name = response.first_name;
    currentUser.last_name = response.last_name;
    currentUser.locale = response.locale;
    currentUser.id = response.id;
    currentUser.url = response.url;
    currentUser.phone = response.phone;
    currentUser.email = response.email;
  }
}
