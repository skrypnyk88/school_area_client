var constants = require('./../constants');

module.exports = angular
  .module('groupResource.resource', [
    constants.name
    ])
  .factory('groupResource', groupResource);

groupResource.$inject = ['$resource', 'globalSettings'];

function groupResource($resource, globalSettings) {
  return $resource(globalSettings.SERVER_URL_V1 + '/groups.json');
}
