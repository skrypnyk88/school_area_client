var constants = require('./../constants');

module.exports = angular
  .module('healthReport.resource', [
    constants.name
    ])
  .factory('healthReportResource', healthReportResource);

healthReportResource.$inject = ['$resource', 'globalSettings', 'currentGroupDay'];

function healthReportResource($resource, globalSettings, currentGroupDay) {
  return $resource(globalSettings.SERVER_URL_V1 + '/health_reports/:id.json',
  {id: '@id', group_id: currentGroupDay.group_id},
  {'update': {method: 'PUT'}});
}
