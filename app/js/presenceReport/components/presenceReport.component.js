var presenceReportServ = require('./../../common/services/presenceReport.service');
module.exports = angular
  .module('presenceReport.component', [
    presenceReportServ.name
    ])
  .component('presenceComponent', {
    templateUrl: './app/js/presenceReport/components/presenceReport.template.html',
    controller: PresenceReportController
  });

PresenceReportController.$inject = ['presenceReportService','toggleMessage'];
function PresenceReportController(presenceReportService, toggleMessage) {

  var ctrl = this;
  var timeRegex = /^[\d\- ]{2}:[\d\- ]{2}$/;
  var validTime = {hour: '2-digit',
                  minute: '2-digit',
                  hour12: false
                };

  ctrl.loadPresenceReports = function() {
    presenceReportService.getPresenceReports().then(
      function(presenceReports) {
        ctrl.presenceReports = presenceReports;
      });
  };

  ctrl.addReportTime = function(presenceReport) {
    if (presenceReport.report_time == false || presenceReport.report_time.slice(-1)[0].end_time) {
      presenceReport.start_time = new Date().toLocaleTimeString([], validTime);
      presenceReportService.addReportTime(presenceReport)
                       .then(function(reportTime) {
          presenceReport.report_time.push(reportTime);
          ctrl.loadPresenceReports();
        });
    };
  };

  ctrl.updateReportTime = function(reportTime, presenceReport) {
    if (reportTime.end_time != null) {
      if (reportTime.start_time < reportTime.end_time) {
        if ((timeRegex.test(reportTime.start_time)) &&
           (timeRegex.test(reportTime.end_time))) {
          presenceReportService.updateReportTime(reportTime, presenceReport)
            .then(function(reportTime) {
            return reportTime;
          });
        } else {
          ctrl.loadPresenceReports();
          toggleMessage.showMessages(['Problem with validation']);
        };
      } else {
        ctrl.loadPresenceReports();
        toggleMessage.showMessages(['Start time must be earlier than end time']);
      };
    } else {
      ctrl.loadPresenceReports();
      toggleMessage.showMessages(['Can edit after enter end time']);
    }
  };

  ctrl.updateEndTime = function(presenceReport) {
    if (presenceReport.report_time.slice(-1)[0].end_time == null) {
      reportTime = presenceReport.report_time.slice(-1)[0];
      reportTime.end_time = new Date().toLocaleTimeString([], validTime);
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
