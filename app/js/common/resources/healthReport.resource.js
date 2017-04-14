var con = require('./../constants');

module.exports = angular
  .module('healthReport.resource', [
    con.name
    ])
  .factory('healthReportResource', healthReportResource);

healthReportResource.$inject = ['$resource', 'constants'];
function healthReportResource($resource, constants) {
  console.log(constants.serverUrlV1);
  return $resource(constants.serverUrlV1 + '/groups/1/health_report.json',
  {
    'update': {method: 'PUT'}
  });
}
