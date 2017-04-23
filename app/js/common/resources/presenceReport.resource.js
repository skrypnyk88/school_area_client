module.exports = angular
.module('presenceReport.resource', [])
.factory('presenceReportResource', presenceReportResource);

presenceReportResource.$inject = ['$resource', 'globalSettings'];

function presenceReportResource($resource, globalSettings) {
  return $resource(globalSettings.SERVER_URL_V1 + '/groups/:group_id/presence_reports.json',
  {group_id: '@group_id'});
}
