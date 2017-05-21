var constants = require('./../constants');

module.exports = angular
  .module('student.resource', [
    constants.name
  ])
  .factory('studentResource', studentResource);

studentResource.$inject = ['$resource', 'globalSettings'];

function studentResource($resource, globalSettings) {
  return $resource(
    globalSettings.SERVER_URL_V1 + '/students/:id.json',
    {
      id: '@id'
    },
    {
      'update': {method: 'PUT'},
      'upload': {
        url: globalSettings.SERVER_URL_V1 + '/students/:id/upload.json',
        method: 'PUT'
      }
    }
  );
}
