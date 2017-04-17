var constants = require('./../constants');

module.exports = angular
  .module('healthReport.resource', [
    constants.name
    ])
  .factory('healthReportResource', healthReportResource);

healthReportResource.$inject = ['$resource', 'globalSettings'];

function healthReportResource($resource, globalSettings) {
  return $resource(globalSettings.SERVER_URL_V1 + '/groups/1/health_reports/:id.json', {id: '@id'},
  {
    'update': {method: 'PUT'}
  });
}
