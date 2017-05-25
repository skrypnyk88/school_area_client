module.exports = angular
.module('presenceReport.resource', [])
.factory('presenceReportResource', presenceReportResource);

presenceReportResource.$inject = ['$resource', 'globalSettings'];

function presenceReportResource($resource, globalSettings) {
  return $resource(globalSettings.SERVER_URL_V1 + '/presence_reports.json');
}
