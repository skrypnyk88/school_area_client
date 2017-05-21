module.exports = angular
.module('napReport.resource', [])
.factory('napReportResource', napReportResource);

napReportResource.$inject = ['$resource', 'globalSettings','currentGroupDay'];

function napReportResource($resource, globalSettings, currentGroupDay) {
  return $resource(globalSettings.SERVER_URL_V1 + '/nap_reports.json');
}
