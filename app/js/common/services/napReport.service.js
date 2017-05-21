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

function napReportService(
  napReportResource,
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
    .$promise.then(function(napReports) {
      return napReports;
    }, function() { toggleMessage.showMessages($filter('translate')(['presence_report.SERVER']));
    });
  };

  function addReportTime(napReport) {
    return napReportTimeResource.save({nap_report_id: napReport.id,
                                group_id: currentGroupDay.group_id,
                                student_id: napReport.student_id,
                                report_time: {start_time: napReport.start_time}})
    .$promise
    .then(function(reportTimes) {
      return reportTimes;
    }, function(response) {
      toggleMessage.returnDataErrors(response);
      return response.data;
    });
  };

  function deleteReportTime(reportTime, napReport) {
    return napReportTimeResource.delete({id: reportTime.id,
                                  nap_report_id: napReport.id,
                                  group_id: napReport.group_id,
                                  student_id: napReport.student_id})
    .$promise
    .then(function() {
    }, function(response) {
      toggleMessage.returnDataErrors(response);
      return response.data;
    });
  };

  function updateReportTime(reportTime, napReport) {

    return napReportTimeResource.update({
                                  id: reportTime.id,
                                  nap_report_id: napReport.id,
                                  group_id: napReport.group_id,
                                  report_time: reportTime}
                                  )

    .$promise
    .then(function(updatedReportTime) {
      return updatedReportTime;
    }, function(response) {
      toggleMessage.returnDataErrors(response);
      return response.data;
    });
  };

  function updateEndTime(reportTime, napReport) {
    return napReportTimeResource.update({
                                  id: reportTime.id,
                                  nap_report_id: napReport.id,
                                  group_id: napReport.group_id,
                                  report_time: reportTime}
                                  )

    .$promise
    .then(function(updatedReportTime) {
      return updatedReportTime;
    }, function(response) {
      toggleMessage.returnDataErrors(response);
      return response.data;
    });
  };
};
