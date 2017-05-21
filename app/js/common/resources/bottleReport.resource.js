module.exports = angular
.module('bottleReport.resource', [])
.factory('bottleReportResource', bottleReportResource);

bottleReportResource.$inject = ['$resource', 'globalSettings'];

function bottleReportResource($resource, globalSettings) {
  return $resource(globalSettings.SERVER_URL_V1 + '/bottle_reports.json');
};
