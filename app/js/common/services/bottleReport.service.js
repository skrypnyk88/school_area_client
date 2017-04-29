var bottleReportResource = require('./../resources/bottleReport.resource.js');
var bottleResource = require('./../resources/bottle.resource.js');
<<<<<<< 78cc606e23ca9236ad1c001671c581f64c62f056
var toggleMessage = require('./toggleMessage/toggleMessage.service.js');
=======
>>>>>>> LVRUBYM-221:Fixed file's name

module.exports = angular
.module('bottleReport.service', [
  bottleReportResource.name,
<<<<<<< 78cc606e23ca9236ad1c001671c581f64c62f056
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
=======
  bottleResource.name
  ])
.factory('bottleReportService', bottleReportService);

bottleReportService.$inject = ['bottleReportResource', 'bottleResource'];

function bottleReportService(bottleReportResource, bottleResource) {
  var service = {
    getBottleReports: getBottleReports,
    getBottles: getBottles,
>>>>>>> LVRUBYM-221:Fixed file's name
    addBottle: addBottle,
    deleteBottle: deleteBottle,
    updateBottle: updateBottle
  };

  function getBottleReports() {
<<<<<<< 78cc606e23ca9236ad1c001671c581f64c62f056
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
=======
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
>>>>>>> LVRUBYM-221:Fixed file's name
  };

  return service;
};
