var constants = require('./../constants');
module.exports = angular
  .module('myDayReport.resource', [
    constants.name
  ])
  .factory('myDayReportResource', myDayReportResource);

myDayReportResource.$inject = ['$resource', 'globalSettings', 'currentGroupDay'];

function myDayReportResource($resource, globalSettings, currentGroupDay) {
  return $resource(globalSettings.SERVER_URL_V1 + '/my_day_reports/:id.json',
    {id: '@id',
    group_id: currentGroupDay.group_id,
    day: currentGroupDay.day},
  {'update': {method: 'PUT'}});
}