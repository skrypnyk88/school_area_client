module.exports = angular
  .module('myDayReport.resource', [])
  .factory('myDayReportResource', myDayReportResource);

myDayReportResource.$inject = ['$resource', 'globalSettings'];

function myDayReportResource($resource, globalSettings) {
  return $resource(globalSettings.SERVER_URL_V1 + '/groups/:group_id/my_day_reports/:id.json',
    {group_id: 1, id: '@id'},
    {
      'update': {method: 'PUT'}
    });
}
