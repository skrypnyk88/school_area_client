module.exports = angular
  .module('resetPassword.resource', [])
  .factory('resetPasswordResource', resetPasswordResource);

resetPasswordResource.$inject = ['$resource', 'globalSettings'];

function resetPasswordResource($resource, globalSettings) {
  var resource = $resource(globalSettings.SERVER_URL + '/passwords' + '/:action', {},
    {
      'reset': {
        params: {action: 'reset'},
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
