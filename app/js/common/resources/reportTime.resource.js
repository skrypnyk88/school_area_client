module.exports = angular
.module('reportTime.resource', [])
.factory('reportTimeResource', reportTimeResource);

reportTimeResource.$inject = ['$resource', 'globalSettings','currentGroupDay'];

function reportTimeResource($resource, globalSettings, currentGroupDay) {
  return $resource(globalSettings.SERVER_URL_V1 + '/report_times/:id.json',
    {id: '@id',
    presence_report_id: '@presence_report_id',
    presence_report: {group_id: currentGroupDay.group_id,
                      day: currentGroupDay.day}},
    {
      'update': {method: 'PUT'}
    });
}
