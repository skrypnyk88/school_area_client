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
  return service;
  
  
  function getBottleReports() {
    return bottleReportResource.query().$promise.then(function(bottleReports) {
        return bottleReports;
      })
  };
};
