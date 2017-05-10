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

    return bottleReportResource.query(params)
                               .$promise
                               .then(responseSuccess, responseFailure);
  };

  function addBottle(bottleReport) {
    var params = {
      bottle_report_id: bottleReport.id,
      group_id: bottleReport.group_id,
      student_id: bottleReport.student_id
    };

    return bottleResource.save(params)
    .$promise
    .then(responseSuccess, responseFailure);
  };

  function deleteBottle(bottle, bottleReport) {
    var params = {
      id: bottle.id,
      bottle_report_id: bottleReport.id,
      group_id: bottleReport.group_id
    };

    return bottleResource.delete(params)
    .$promise
    .then(responseSuccess, responseFailure);
  };

  function updateBottle(bottle, bottleReport) {
    var params = {
      bottle: bottle,
      id: bottle.id,
      bottle_report_id: bottleReport.id,
      group_id: bottleReport.group_id
    };

    return bottleResource.update(params)
    .$promise
    .then(responseSuccess, responseFailure);
  };

  function responseSuccess(data) {
    return data;
  };

  function responseFailure(error) {
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
