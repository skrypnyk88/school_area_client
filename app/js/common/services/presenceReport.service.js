var presenceReportResource = require('./../resources/presenceReport.resource.js');
var reportTimeResource = require('./../resources/reportTime.resource.js');
var messageService = require('./message.service.js');

module.exports = angular
.module('presenceReport.service', [
  presenceReportResource.name,
  reportTimeResource.name,
  messageService.name
  ])
.factory('presenceReportService', presenceReportService);

presenceReportService.$inject = ['presenceReportResource',
                                 'reportTimeResource',
                                 'currentGroupDay',
                                 'messageService'];

function presenceReportService(
  presenceReportResource,
  reportTimeResource,
  currentGroupDay,
  messageService) {
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
    return presenceReportResource.query({group_id: currentGroupDay.group_id,
                                      day: currentGroupDay.day})
    .$promise.then(function(presenceReports) {
      return presenceReports;
    }, function() {
    });
  };

  function getReportTimes(presenceReport) {
    return reportTimeResource.query({presence_report_id: presenceReport.id,
                                  group_id: currentGroupDay.group_id,
                                  day: currentGroupDay.day})
    .$promise
    .then(function(reportTimes) {
      return reportTimes;
    }, function() {
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
    }, function(response) {
      messageService.toggleMsg(response);
    });
  };

  function deleteReportTime(reportTime, presenceReport) {
    return reportTimeResource.delete({id: reportTime.id,
                                  presence_report_id: presenceReport.id,
                                  group_id: presenceReport.group_id,
                                  student_id: presenceReport.student_id})
    .$promise
    .then(function() {
    }, function(response) {
      messageService.toggleMsg(response);
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
    }, function(response) {
      messageService.toggleMsg(response);
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
    }, function(response) {
      messageService.toggleMsg(response);
    });
  };
};
