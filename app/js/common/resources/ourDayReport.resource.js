module.exports = angular
  .module('ourDayReport.resource', [])
  .factory('ourDayReportResource', ourDayReportResource);

ourDayReportResource.$inject = ['$resource', 'globalSettings'];

function ourDayReportResource($resource, globalSettings) {
  return $resource(globalSettings.SERVER_URL_V1 + '/our_day.json', {},
  {
    'update': {method: 'PUT'}
  });
}
