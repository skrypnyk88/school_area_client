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
<<<<<<< 830abdfadbc27494806e306ed6b21698c939cc08
    getBottles: getBottles,
>>>>>>> LVRUBYM-221:Fixed file's name
=======
>>>>>>> LVRUBYM-221:Added tests for service
    addBottle: addBottle,
    deleteBottle: deleteBottle,
    updateBottle: updateBottle
  };

  function getBottleReports() {
<<<<<<< b1263744d5dbac2df9f7478c666c2beb7b7604de
<<<<<<< 78cc606e23ca9236ad1c001671c581f64c62f056
=======
>>>>>>> LVRUBYM-221:Added validation and failure response
    var params = {
      group_id: currentGroupDay.group_id
    };
<<<<<<< 830abdfadbc27494806e306ed6b21698c939cc08

<<<<<<< b1263744d5dbac2df9f7478c666c2beb7b7604de
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
=======
=======
>>>>>>> LVRUBYM-221:Added tests for service
    return bottleReportResource.query(params).$promise.then(function(bottleReports) {
>>>>>>> LVRUBYM-221:Added validation and failure response
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
>>>>>>> LVRUBYM-221:Fixed file's name
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
