var presenceReportServ = require('./../../common/services/presenceReport.service');

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
  presenceReportServ.name
  ])
.component('presenceReport', {
  templateUrl: './app/js/presenceReport/components/presenceReport.template.html',
  controller: PresenceReportController
});

PresenceReportController.$inject = ['presenceReportService'];
function PresenceReportController(presenceReportService) {

<<<<<<< d67a62bd3f27dfc6312ee18febfeaba50bf23308
function PresenceReportController(presenceReportService, reportTimeService, currentGroupDay) {
>>>>>>> LVRUBYM-191: created presenceReport
=======
>>>>>>> LVRUBYM-191: Changed component, resourse, and service
  var ctrl = this;
  var regex = /^[\d\- ]{2}:[\d\- ]{2}$/;

  ctrl.loadPresenceReports = function() {
    presenceReportService.getPresenceReports().then(
      function(presenceReports) {
        ctrl.presenceReports = presenceReports;
      });
  };

  ctrl.addReportTime = function(presenceReport) {
    if (presenceReport.report_time == false || presenceReport.report_time.slice(-1)[0].end_time) {
      presenceReport.start_time = new Date().toLocaleTimeString([], {hour: '2-digit',
                                                                      minute: '2-digit',
                                                                      hour12: false});
      presenceReportService.addReportTime(presenceReport)
                       .then(function(reportTime) {
          presenceReport.report_time.push(reportTime);
          ctrl.loadPresenceReports();
        });
    };
  };

  ctrl.updateReportTime = function(reportTime, presenceReport) {
    if ((reportTime.end_time != null ||
         reportTime.start_time < reportTime.end_time) &&
         (regex.test(reportTime.start_time)) &&
         (regex.test(reportTime.end_time))) {
      presenceReportService.updateReportTime(reportTime, presenceReport).then(function(reportTime) {
        return reportTime;
      });
    } else {
      ctrl.loadPresenceReports();
    };
  };

  ctrl.updateEndTime = function(presenceReport) {
    if (presenceReport.report_time.slice(-1)[0].end_time == null) {
      reportTime = presenceReport.report_time.slice(-1)[0];
      reportTime.end_time = new Date().toLocaleTimeString([], {hour: '2-digit',
                                                                minute: '2-digit',
                                                                hour12: false});
      presenceReportService.updateEndTime(reportTime, presenceReport).then(function(reportTime) {
        return reportTime;
      });
      ctrl.loadPresenceReports();
    };
  };

  ctrl.deleteReportTime = function(reportTime, presenceReport) {
    if (confirm('Are you sure, you want to delete this report?')) {
      presenceReportService.deleteReportTime(reportTime, presenceReport).then(function() {
        ctrl.loadPresenceReports();
      });
    }
  };
  ctrl.loadPresenceReports();
}
