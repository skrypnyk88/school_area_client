var bottleReportResource = require('./../resources/bottle_report.resource.js');
module.exports = angular
.module('bottleReport.service', [
  bottleReportResource.name
  ])
.factory('bottleReportService', bottleReportService);

bottleReportService.$inject = ['bottleReportResource'];

function bottleReportService(bottleReportResource) {
  var service = {
    getBottleReports: getBottleReports
  };

  function getBottleReports() {
    return bottleReportResource.query({group_id: 21}).$promise.then(function(bottleReports) {
      return bottleReports;
    });
  };
  return service;
};
