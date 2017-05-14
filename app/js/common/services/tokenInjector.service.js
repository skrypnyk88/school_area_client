module.exports = angular
  .module('tokenInjector.service', [])
  .factory('tokenInjector', TokenInjector);

TokenInjector.$inject = ['$q', '$injector', 'localStorageService', 'globalSettings'];

function TokenInjector($q, $injector, localStorageService, globalSettings) {
  return {
    request: function(config) {
      if (config.url.startsWith(globalSettings.SERVER_URL)) {
        var token = localStorageService.get('token');
        config.headers.Authorization = 'Bearer ' + token;
      }
      return config;
    },
    responseError: function(response) {
      var auth = $injector.get('auth');
      var toggleMessage = $injector.get('toggleMessage');

      if (response.status === 401) {
        auth.removeToken();
      };

      if (response.status === -1) {
        auth.removeToken();
        toggleMessage.showMessages(['Server is down']);
      }
      return $q.reject(response);
    }
  };
}
