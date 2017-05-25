module.exports = angular
.module('napReport.resource', [])
.factory('napReportResource', napReportResource);

napReportResource.$inject = ['$resource', 'globalSettings'];

function napReportResource($resource, globalSettings) {
  return $resource(globalSettings.SERVER_URL_V1 + '/nap_reports.json');
}
