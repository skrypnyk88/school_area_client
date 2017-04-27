var constants = require('./../constants');

module.exports = angular
  .module('profile.resource', [
    constants.name
    ])
  .factory('profileResource', profileResource);

profileResource.$inject = ['$resource', 'globalSettings'];

function profileResource($resource, globalSettings) {
<<<<<<< 43c1e46ea7b1202edcb88ff46c4a6898d5cdd2e4
  return $resource(globalSettings.SERVER_URL_V1 + '/teachers/:id.json',
  {id: '@id'},
  {
    'update': {method: 'PUT'},
    'upload': {
      url: globalSettings.SERVER_URL_V1 + '/teachers/:id/upload.json',
      method: 'PUT'
    }
=======
  return $resource(globalSettings.SERVER_URL_V1 + '/teachers/id.json', {id: '@id'},
  {
    'update': {method: 'PUT'}
>>>>>>> LVRUBYM-325: Add component for profile
  });
}
