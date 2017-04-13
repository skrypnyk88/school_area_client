var constants = require('./../constants');
module.exports = angular
  .module('myDayReport.resource', [
    constants.name
  ])
  .factory('myDayReportResource', myDayReportResource);

myDayReportResource.$inject = ['$resource', 'constants'];

function myDayReportResource($resource, constants) {
  return $resource(constants.URL + '/groups/1/my_day_reports/:id.json', {id: '@id'},
    {
      'update': {method: 'PUT'}
    });
}
