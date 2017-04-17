module.exports = angular
  .module('auth.resource', [])
  .factory('authResource', AuthResource);

AuthResource.$inject = ['$resource', 'globalSettings'];

function AuthResource($resource, globalSettings) {
  var resource = $resource(globalSettings.SERVER_URL + '/:action', {},
    {
      'authenticate': {
        params: {action: 'signin'},
        method: 'POST',
        interceptor: {
          response: function(response) {
            return response;
          }
        }
      },
      'refreshToken': {
        params: {action: 'refresh_token'},
        method: 'GET',
        interceptor: {
          response: function(response) {
            return response;
          }
        }
      }
    });
  return resource;
}
