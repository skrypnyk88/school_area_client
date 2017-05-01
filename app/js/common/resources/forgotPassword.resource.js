module.exports = angular
  .module('forgotPassword.resource', [])
  .factory('forgotPasswordResource', forgotPasswordResource);

forgotPasswordResource.$inject = ['$resource', 'globalSettings'];

function forgotPasswordResource($resource, globalSettings) {
  var resource = $resource(globalSettings.SERVER_URL + '/passwords' + '/:action', {},
    {
      'forgot': {
        params: {action: 'forgot'},
        method: 'POST',
        interceptor: {
          response: function(response) {
            return response;
          }
        }
      }
    });
  return resource;
}
