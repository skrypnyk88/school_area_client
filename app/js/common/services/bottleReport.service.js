var bottleReportResource = require('./../resources/bottleReport.resource.js');
var bottleResource = require('./../resources/bottle.resource.js');

module.exports = angular
.module('bottleReport.service', [
  bottleReportResource.name,
  bottleResource.name
  ])
.factory('bottleReportService', bottleReportService);

bottleReportService.$inject = ['bottleReportResource',
                               'bottleResource',
                               'currentGroupDay',
                               'errorMessages'];

function bottleReportService(bottleReportResource, bottleResource, currentGroupDay, errorMessages) {
  var service = {
    getBottleReports: getBottleReports,
    getBottles: getBottles,
    addBottle: addBottle,
    deleteBottle: deleteBottle,
    updateBottle: updateBottle
  };

  function getBottleReports() {
    var params = {
      group_id: currentGroupDay.group_id
    };

    return bottleReportResource.query(params).$promise.then(function(bottleReports) {
      return bottleReports;
    }, function(errors) {
      responseFailure(errors.data);
    });
  };

  function getBottles(bottleReport) {
    return bottleResource.query({bottle_report_id: bottleReport.id,
                                group_id: bottleReport.group_id})
    .$promise
    .then(function(bottles) {
      return bottles;
    }, function(errors) {
      responseFailure(errors.data);
    });
  };

  function addBottle(bottleReport) {
    return bottleResource.save({bottle_report_id: bottleReport.id,
                                group_id: bottleReport.group_id,
                                student_id: bottleReport.student_id})
    .$promise
    .then(function(bottle) {
      return bottle;
    }, function(errors) {
      responseFailure(errors.data);
    });
  };

  function deleteBottle(bottle, bottleReport) {
    return bottleResource.delete({id: bottle.id,
                                  bottle_report_id: bottleReport.id,
                                  group_id: bottleReport.group_id})
    .$promise
    .then(function() {
    }, function(errors) {
      responseFailure(errors.data);
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
    }, function(errors) {
      responseFailure(errors.data);
    });
  };

  function responseFailure(errorDetails) {
    console.log(errorDetails);
    alert(errorMessages.FAIL_RESPONSE);
  };

  return service;
};
