var bottleCon = require('./../constants.js');
module.exports = angular
.module('bottleReport.resource', [bottleCon.name])
.factory('bottleReportResource', bottleReportResource);

bottleReportResource.$inject = ['$resource', 'globalSettings'];

function bottleReportResource($resource, globalSettings) {
  return $resource(globalSettings.SERVER_URL_V1 + '/groups/21/bottle_reports.json');
}
