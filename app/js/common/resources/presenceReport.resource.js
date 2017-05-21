module.exports = angular
.module('presenceReport.resource', [])
.factory('presenceReportResource', presenceReportResource);

presenceReportResource.$inject = ['$resource', 'globalSettings','currentGroupDay'];

function presenceReportResource($resource, globalSettings, currentGroupDay) {
  return $resource(globalSettings.SERVER_URL_V1 + '/presence_reports.json',
  {group_id: currentGroupDay.group_id
    ,
    day: currentGroupDay.day
  });
}
