var Resource = require('./../resources/healthReport.resource.js');

module.exports = angular
  .module('healthReport.service', [
    Resource.name
  ])
  .factory('HealthReport', HealthReport);

HealthReport.$inject = ['healthReportResource'];

function HealthReport(healthReportResource) {
  var service = {
    getReports: getReports,
    updateReports: updateReports
  };
  return service;

  function getReports() {
    return healthReportResource.query().$promise.then(function(data) {
      return data;
    });
  };

  function updateReports(health_note, id, health_care) {
    var params = {report: {health_note: health_note, health_care: health_care},id: id};
    return healthReportResource.update(params).$promise.then(function(report) {
      return report;
    });
  };
}
