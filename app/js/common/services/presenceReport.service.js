var presenceReportResource = require('./../resources/presenceReport.resource.js');

module.exports = angular
.module('presenceReport.service', [
  presenceReportResource.name
  ])
.factory('presenceReportService', presenceReportService);

presenceReportService.$inject = ['presenceReportResource','currentGroupDay'];

function presenceReportService(presenceReportResource, currentGroupDay) {
  var service = {
    getPresenceReports: getPresenceReports
  };

  function getPresenceReports() {
    return presenceReportResource.query().$promise.then(function(presenceReports) {
      return presenceReports;
    });
  };
  return service;
};
