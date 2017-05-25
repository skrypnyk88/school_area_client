module.exports = angular
.module('reportTime.resource', [])
.factory('reportTimeResource', reportTimeResource);

reportTimeResource.$inject = ['$resource', 'globalSettings'];

function reportTimeResource($resource, globalSettings) {
  return $resource(globalSettings
    .SERVER_URL_V1 + '/presence_reports/:presence_report_id/report_times/:id.json',
    {id: '@id',
    presence_report_id: '@presence_report_id'},
    {
      'update': {method: 'PUT'}
    });
}
