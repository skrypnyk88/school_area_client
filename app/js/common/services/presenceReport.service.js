var presenceReportResource = require('./../resources/presenceReport.resource.js');
var reportTimeResource = require('./../resources/reportTime.resource.js');

module.exports = angular
.module('presenceReport.service', [
  presenceReportResource.name,
  reportTimeResource.name
  ])
.factory('presenceReportService', presenceReportService);

presenceReportService.$inject = ['presenceReportResource','reportTimeResource','currentGroupDay'];

function presenceReportService(presenceReportResource, reportTimeResource, currentGroupDay) {
  var service = {
    getPresenceReports: getPresenceReports,
    getReportTimes: getReportTimes,
    addReportTime: addReportTime,
    deleteReportTime: deleteReportTime,
    updateReportTime: updateReportTime,
    updateEndTime: updateEndTime
  };
  return service;

  function getPresenceReports() {
    var params = {
      group_id: currentGroupDay.group_id,
      day: currentGroupDay.day
    };
    return presenceReportResource.query(params).$promise.then(function(presenceReports) {
      return presenceReports;
    });
  };

  function getReportTimes(presenceReport) {

    var params = {
      presence_report_id: presenceReport.id,
      group_id: currentGroupDay.group_id,
      day: currentGroupDay.day
    };

    return reportTimeResource.query(params)
    .$promise
    .then(function(reportTimes) {
      return reportTimes;
    });
  };

  function addReportTime(presenceReport) {
    return reportTimeResource.save({presence_report_id: presenceReport.id,
                                day: presenceReport.day,
                                group_id: currentGroupDay.group_id,
                                start_time: presenceReport.start_time,
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
};
