var Resource = require('./../resources/healthReport.resource.js');

module.exports = angular
  .module('healthReport.service', [
    Resource.name
  ])
  .factory('HealthReport', HealthReport);

HealthReport.$inject = ['healthReportResource', 'currentGroupDay'];

function HealthReport(healthReportResource, currentGroupDay) {
  var service = {
    getReports: getReports,
    updateReports: updateReports
  };
  return service;

  function getReports() {
    var params = {
      group_id: currentGroupDay.group_id,
      day: currentGroupDay.day
    };
    return healthReportResource.query(params).$promise.then(function(data) {
      return data;
    });
  };

  function updateReports(health_note, special_care, id) {
    return healthReportResource.update({report: {health_note: health_note,
                                                 special_care: special_care},
                                                 id: id,
                                                 group_id: currentGroupDay.group_id,
                                                 day: currentGroupDay.day}).
    $promise.then(function(note) {
      return note;
    });
  };
}

