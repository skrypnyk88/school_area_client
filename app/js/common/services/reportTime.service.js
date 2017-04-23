var reportTimeResource = require('./../resources/reportTime.resource.js');

module.exports = angular
.module('reportTime.service', [
  reportTimeResource.name
  ])
.factory('reportTimeService', reportTimeService);

reportTimeService.$inject = ['reportTimeResource'];

function reportTimeService(reportTimeResource) {
  var service = {
    getReportTimes: getReportTimes,
    addReportTime: addReportTime,
    deleteReportTime: deleteReportTime,
    updateReportTime: updateReportTime,
    updateEndTime: updateEndTime
  };

  function getReportTimes(presenceReport) {
    return reportTimeResource.query({presence_report_id: presenceReport.id,
                                  group_id: presenceReport.group_id})
    .$promise
    .then(function(reportTimes) {
      return reportTimes;
    });
  };

  function addReportTime(presenceReport) {
    return reportTimeResource.save({presence_report_id: presenceReport.id,
                                group_id: presenceReport.group_id,
                                student_id: presenceReport.student_id})
    .$promise
    .then(function(reportTimes) {
      return reportTimes;
    });
  };

  function deleteReportTime(reportTime, presenceReport) {
    return reportTimeResource.delete({id: reportTime.id,
                                  presence_report_id: presenceReport.id,
                                  group_id: presenceReport.group_id,
                                  student_id: presenceReport.student_id})
    .$promise
    .then(function() {
    });
  };

  function updateReportTime(reportTime, presenceReport) {
    return reportTimeResource.update({
                                  id: reportTime.id,
                                  presence_report_id: presenceReport.id,
                                  group_id: presenceReport.group_id,
                                  start_time: reportTime.start_time,
                                  end_time: reportTime.end_time}
                                  )

    .$promise
    .then(function(updatedReportTime) {
      return updatedReportTime;
    });
  };

  function updateEndTime(reportTime, presenceReport) {
    return reportTimeResource.update({
                                  id: reportTime.id,
                                  presence_report_id: presenceReport.id,
                                  group_id: presenceReport.group_id,
                                  start_time: reportTime.start_time,
                                  end_time: reportTime.end_time}
                                  )

    .$promise
    .then(function(updatedReportTime) {
      return updatedReportTime;
    });
  };
  return service;
};
