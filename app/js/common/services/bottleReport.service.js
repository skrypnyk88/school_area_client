var bottleReportResource = require('./../resources/bottleReport.resource.js');
var bottleResource = require('./../resources/bottle.resource.js');
var toggleMessage = require('./toggleMessage/toggleMessage.service.js');

module.exports = angular
.module('bottleReport.service', [
  bottleReportResource.name,
  bottleResource.name,
  toggleMessage.name
  ])
.factory('bottleReportService', bottleReportService);

bottleReportService.$inject = ['bottleReportResource',
                               'bottleResource',
                               'currentGroupDay',
                               'errorMessages',
                               'toggleMessage'];

function bottleReportService(bottleReportResource,
                             bottleResource,
                             currentGroupDay,
                             errorMessages,
                             toggleMessage) {
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

  function responseFailure(errorInfo) {
    if (!errorInfo.data || errorInfo.data.length === 0) {
      toggleMessage.showMessages([errorMessages.FAIL_RESPONSE]);
    }else {
      toggleMessage.showMessages([errorInfo.data.error]);
    }
  };

  return service;
};
