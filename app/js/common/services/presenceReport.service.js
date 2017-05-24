var presenceReportResource = require('./../resources/presenceReport.resource.js');
var reportTimeResource = require('./../resources/reportTime.resource.js');

module.exports = angular
.module('presenceReport.service', [
  presenceReportResource.name,
  reportTimeResource.name
  ])
.factory('presenceReportService', presenceReportService);

presenceReportService.$inject = ['presenceReportResource',
                                 'reportTimeResource',
                                 'currentGroupDay',
                                 'toggleMessage'];

function presenceReportService(presenceReportResource,
                               reportTimeResource,
                               currentGroupDay,
                               toggleMessage) {
  var service = {
    getPresenceReports: getPresenceReports,
    addReportTime: addReportTime,
    deleteReportTime: deleteReportTime,
    updateReportTime: updateReportTime,
    updateEndTime: updateEndTime
  };
  return service;

  function getPresenceReports() {
    return presenceReportResource.query({group_id: currentGroupDay.group_id})
                                 .$promise.then(responseSuccess, responseFailure);
  };

  function addReportTime(presenceReport) {
    return reportTimeResource.save({presence_report_id: presenceReport.id,
                                    group_id: currentGroupDay.group_id,
                                    student_id: presenceReport.student_id,
                                    report_time: {start_time: presenceReport.start_time}})
    .$promise
    .then(responseSuccess, responseFailure);
  };

  function deleteReportTime(reportTime, presenceReport) {
    return reportTimeResource.delete({id: reportTime.id,
                                      presence_report_id: presenceReport.id,
                                      group_id: presenceReport.group_id,
                                      student_id: presenceReport.student_id})
    .$promise
    .then(responseSuccess, responseFailure);
  };

  function updateReportTime(reportTime, presenceReport) {
    return reportTimeResource.update({id: reportTime.id,
                                      presence_report_id: presenceReport.id,
                                      group_id: presenceReport.group_id,
                                      report_time: reportTime})
    .$promise
    .then(responseSuccess, responseFailure);
  };

  function updateEndTime(reportTime, presenceReport) {
    return reportTimeResource.update({id: reportTime.id,
                                      presence_report_id: presenceReport.id,
                                      group_id: presenceReport.group_id,
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
