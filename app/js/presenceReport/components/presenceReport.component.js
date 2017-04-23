var presenceReportServ = require('./../../common/services/presenceReport.service');
var reportTimeServ = require('./../../common/services/reportTime.service');

module.exports = angular
<<<<<<< 379f0a8c4c1289155443946b2927dc8657f0fd6c
  .module('presenceReport.component', [])
  .component('presenceComponent', {
    templateUrl: './app/js/presenceReport/components/presenceReport.template.html',
    controller: PresenceReportController
  });
function PresenceReportController() {
=======
.module('presenceReport.component', [
  presenceReportServ.name,
  reportTimeServ.name
  ])
.component('presenceReport', {
  templateUrl: './app/js/presenceReport/components/presenceReport.template.html',
  controller: PresenceReportController
});

PresenceReportController.$inject = ['presenceReportService','reportTimeService','currentGroupDay'];

function PresenceReportController(presenceReportService, reportTimeService, currentGroupDay) {
>>>>>>> LVRUBYM-191: created presenceReport
  var ctrl = this;
  ctrl.currentGroupDay = currentGroupDay;

  ctrl.loadPresenceReports = function() {
    presenceReportService.getPresenceReports().then(
      function(presenceReports) {
        ctrl.presenceReports = presenceReports;
      });
  };

  ctrl.addReportTime = function(presenceReport) {
    reportTimeService.addReportTime(presenceReport)
                 .then(function(reportTime) {
      presenceReport.report_time.push(reportTime);
      ctrl.loadPresenceReports();
    });
  };

  ctrl.updateReportTime = function(reportTime, presenceReport) {
    reportTimeService.updateReportTime(reportTime, presenceReport).then(function(reportTime) {
      return reportTime;
    });
  };

  ctrl.updateEndTime = function(presenceReport) {
    reportTime = presenceReport.report_time.slice(-1)[0];
    reportTime.end_time = new Date();
    reportTimeService.updateEndTime(reportTime, presenceReport).then(function(reportTime) {
      return reportTime;

    });
      ctrl.loadPresenceReports();
  };

  ctrl.deleteReportTime = function(reportTime, presenceReport) {
    if (confirm('Are you sure, you want to delete this report?')) {
      reportTimeService.deleteReportTime(reportTime, presenceReport).then(function() {
        ctrl.loadPresenceReports();
      });
    }
  };
  ctrl.loadPresenceReports();
}
