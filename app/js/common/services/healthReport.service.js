var Resource = require('./../resources/healthReport.resource.js');

module.exports = angular
  .module('healthReport.service', [
    Resource.name
  ])
  .factory('HealthReport', HealthReport);

HealthReport.$inject = ['healthReportResource', 'currentGroupDay', 'toggleMessage'];

function HealthReport(healthReportResource, currentGroupDay, toggleMessage) {
  var service = {
    getReports: getReports,
    updateReports: updateReports
  };
  return service;

  function getReports() {
    var params = {group_id: currentGroupDay.group_id};
    return healthReportResource.query(params)
      .$promise.then(responseSuccess, responseFailure);
  };

  function updateReports(health_note, special_care, id) {
    var params = {
      report: {health_note: health_note, special_care: special_care},
      id: id,
      group_id: currentGroupDay.group_id
    };
    return healthReportResource.update(params)
      .$promise.then(responseSuccess, responseFailure);
  };

  function responseSuccess(data) {
    return data;
  };

  function responseFailure(response) {
    toggleMessage.returnDataErrors(response);
    return response.data;
  };
}
