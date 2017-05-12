var constants = require('./../constants');

module.exports = angular
  .module('password.resource', [
    constants.name
    ])
  .factory('passwordResource', passwordResource);

passwordResource.$inject = ['$resource', 'globalSettings'];

function passwordResource($resource, globalSettings) {

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
      },
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
