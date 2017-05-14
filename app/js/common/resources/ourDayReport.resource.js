module.exports = angular
  .module('ourDayReport.resource', [])
  .factory('ourDayReportResource', ourDayReportResource);

ourDayReportResource.$inject = ['$resource', 'globalSettings', 'currentGroupDay'];

function ourDayReportResource($resource, globalSettings, currentGroupDay) {
  return $resource(globalSettings.SERVER_URL_V1 + '/our_day/:day.json',
  {
    day: '@day'
  },
    {
      'update': {method: 'PUT'}
    });
}
