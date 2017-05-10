var constants = require('./../constants');

module.exports = angular
  .module('profile.resource', [
    constants.name
    ])
  .factory('profileResource', profileResource);

profileResource.$inject = ['$resource', 'globalSettings'];

function profileResource($resource, globalSettings) {
  return $resource(globalSettings.SERVER_URL_V1 + '/teachers/:id.json',
  {id: '@id'},
  {
    'update': {method: 'PUT'}
  });
}
