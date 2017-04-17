var bottleCon = require('./../constants.js');
module.exports = angular
  .module('bottleReport.resource', [
  	bottleCon.name
  ])
  .factory('bottleReportResource', bottleReportResource)


bottleReportResource.$inject = ['$resource', 'api'];

function bottleReportResource($resource, api) {
	return $resource(api.URL + '/groups/21/bottle_reports.json') }
