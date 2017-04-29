var bottleReportResource = require('./../resources/bottleReport.resource.js');
var bottleResource = require('./../resources/bottle.resource.js');

module.exports = angular
.module('bottleReport.service', [
  bottleReportResource.name,
  bottleResource.name
  ])
.factory('bottleReportService', bottleReportService);

bottleReportService.$inject = ['bottleReportResource', 'bottleResource'];

function bottleReportService(bottleReportResource, bottleResource) {
  var service = {
    getBottleReports: getBottleReports,
    getBottles: getBottles,
    addBottle: addBottle,
    deleteBottle: deleteBottle,
    updateBottle: updateBottle
  };

  function getBottleReports() {
    return bottleReportResource.query().$promise.then(function(bottleReports) {
      return bottleReports;
    });
  };

  function getBottles(bottleReport) {
    return bottleResource.query({bottle_report_id: bottleReport.id,
                                  group_id: bottleReport.group_id})
    .$promise
    .then(function(bottles) {
      return bottles;
    });
  };

  function addBottle(bottleReport) {
    return bottleResource.save({bottle_report_id: bottleReport.id,
                                group_id: bottleReport.group_id,
                                student_id: bottleReport.student_id})
    .$promise
    .then(function(bottle) {
      return bottle;
    });
  };

  function deleteBottle(bottle, bottleReport) {
    return bottleResource.delete({id: bottle.id,
                                  bottle_report_id: bottleReport.id,
                                  group_id: bottleReport.group_id})
    .$promise
    .then(function() {
    });
  };

  function updateBottle(bottle, bottleReport) {
    return bottleResource.update({bottle: bottle,
                                  id: bottle.id,
                                  bottle_report_id: bottleReport.id,
                                  group_id: bottleReport.group_id})
    .$promise
    .then(function(updatedBottle) {
      return updatedBottle;
    });
  };

  return service;
};
