module.exports = angular
.module('napReportTime.resource', [])
.factory('napReportTimeResource', napReportTimeResource);

napReportTimeResource.$inject = ['$resource', 'globalSettings','currentGroupDay'];

function napReportTimeResource($resource, globalSettings, currentGroupDay) {
  return $resource(globalSettings
    .SERVER_URL_V1 + '/nap_reports/:nap_report_id/report_times/:id.json',
    {id: '@id',
    nap_report_id: '@nap_report_id'},
    {
      'update': {method: 'PUT'}
    });
}
