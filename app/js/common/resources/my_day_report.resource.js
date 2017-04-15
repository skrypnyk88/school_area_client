var constants = require('./../constants');

module.exports = angular
  .module('myDayReport.resource', [
    constants.name
  ])
  .factory('myDayReportResource', myDayReportResource);

myDayReportResource.$inject = ['$resource', 'globalSettings'];

function myDayReportResource($resource, globalSettings) {
  return $resource(globalSettings.SERVER_URL_V1 + '/groups/1/my_day_reports/:id.json', {id: '@id'},
    {
      'update': {method: 'PUT'}
    });
}
