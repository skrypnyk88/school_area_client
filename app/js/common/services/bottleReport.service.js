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
                               'errorMessages',
                               '$mdToast'];

function bottleReportService(bottleReportResource,
                             bottleResource,
                             currentGroupDay,
                             errorMessages,
                             $mdToast) {
  var service = {
    getBottleReports: getBottleReports,
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
    var fail = errorMessages.FAIL_RESPONSE;
    $mdToast.show({
      template: '<md-toast><div class="md-toast-content">' +
                  fail +
                '</div></md-toast>',
      position: 'top right'
    });
  };

  return service;
};
