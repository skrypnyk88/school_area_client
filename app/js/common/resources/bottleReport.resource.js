module.exports = angular
.module('bottleReport.resource', [])
.factory('bottleReportResource', bottleReportResource);

bottleReportResource.$inject = ['$resource', 'globalSettings', 'currentGroupDay'];

function bottleReportResource($resource, globalSettings, currentGroupDay) {
  return $resource(globalSettings.SERVER_URL_V1 + '/v1/bottle_reports.json',
  {group_id: currentGroupDay.group_id});
}
