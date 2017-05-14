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

function presenceReportService(
  presenceReportResource,
  reportTimeResource,
  currentGroupDay,
  toggleMessage) {
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

    return presenceReportResource.query({group_id: currentGroupDay.group_id
      ,
                                         day: currentGroupDay.day
                                    })
    .$promise.then(function(presenceReports) {
      return presenceReports;
    }, function() {
      toggleMassage.showMassages(["Problems with server"]);
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
     toggleMassage.showMassages(["Problems with server"]);
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
      messageService.returnDataErrors(response);
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
      toggleMessage.returnDataErrors(response);
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
      toggleMessage.returnDataErrors(response);
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
      toggleMessage.returnDataErrors(response);
    });
  };
};
