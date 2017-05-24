var napReportResource = require('./../resources/napReport.resource.js');
var napReportTimeResource = require('./../resources/napReportTime.resource.js');

module.exports = angular
.module('napReport.service', [
  napReportResource.name,
  napReportTimeResource.name
  ])
.factory('napReportService', napReportService);

napReportService.$inject = ['napReportResource',
                            'napReportTimeResource',
                            'currentGroupDay',
                            'toggleMessage'];

function napReportService(napReportResource,
                          napReportTimeResource,
                          currentGroupDay,
                          toggleMessage) {
  var service = {
    getNapReports: getNapReports,
    addReportTime: addReportTime,
    deleteReportTime: deleteReportTime,
    updateReportTime: updateReportTime,
    updateEndTime: updateEndTime
  };
  return service;

  function getNapReports() {
    return napReportResource.query({group_id: currentGroupDay.group_id})
                            .$promise.then(responseSuccess, responseFailure);
  };

  function addReportTime(napReport) {
    return napReportTimeResource.save({nap_report_id: napReport.id,
                                      group_id: currentGroupDay.group_id,
                                      student_id: napReport.student_id,
                                      report_time: {start_time: napReport.start_time}})
    .$promise
    .then(responseSuccess, responseFailure);
  };

  function deleteReportTime(reportTime, napReport) {
    return napReportTimeResource.delete({id: reportTime.id,
                                        nap_report_id: napReport.id,
                                        group_id: napReport.group_id,
                                        student_id: napReport.student_id})
    .$promise
    .then(responseSuccess, responseFailure);
  };

  function updateReportTime(reportTime, napReport) {

    return napReportTimeResource.update({id: reportTime.id,
                                        nap_report_id: napReport.id,
                                        group_id: napReport.group_id,
                                        report_time: reportTime})
    .$promise
    .then(responseSuccess, responseFailure);
  };

  function updateEndTime(reportTime, napReport) {
    return napReportTimeResource.update({id: reportTime.id,
                                        nap_report_id: napReport.id,
                                        group_id: napReport.group_id,
                                        report_time: reportTime})
    .$promise
    .then(responseSuccess, responseFailure);
  };

  function responseSuccess(data) {
    return data;
  };

  function responseFailure(response) {
    toggleMessage.returnDataErrors(response);
    return response.data;
  };
};
