var presenceReportServ = require('./../../common/services/presenceReport.service');
module.exports = angular
  .module('presenceReport.component', [
    presenceReportServ.name
    ])
  .component('presenceComponent', {
    templateUrl: './app/js/presenceReport/components/presenceReport.template.html',
    controller: PresenceReportController
  });

PresenceReportController.$inject = ['presenceReportService','toggleMessage','$filter'];
function PresenceReportController(presenceReportService, toggleMessage, $filter) {

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
    if (presenceReport.report_time == false || (presenceReport.report_time.slice(-1)[0].end_time &&
      (document.getElementById('myBtn_{reportTime.id}}_time').disabled) == false)) {
      document.getElementById('myBtn_{reportTime.id}}_time').disabled = true;
      presenceReport.start_time = new Date().toLocaleTimeString([], validTime);
      presenceReportService.addReportTime(presenceReport)
                       .then(function(reportTime) {
          presenceReport.report_time.push(reportTime);
          ctrl.loadPresenceReports();
          document.getElementById('myBtn_{reportTime.id}}_time').disabled = false;
        });
    };
  };

  ctrl.updateReportTime = function(reportTime, presenceReport) {
    if (reportTime.end_time != null) {
      if ((timeRegex.test(reportTime.start_time)) &&
           (timeRegex.test(reportTime.end_time))) {
        if (reportTime.start_time < reportTime.end_time &&
            reportTime.start_time != reportTime.end_time) {
          presenceReportService.updateReportTime(reportTime, presenceReport)
            .then(function(reportTime) {
            return reportTime;
          });
        } else {
          ctrl.loadPresenceReports();
          toggleMessage.showMessages($filter('translate')(['presence_report.TIME']));
        };
      } else {
        ctrl.loadPresenceReports();
        toggleMessage.showMessages($filter('translate')(['presence_report.VALIDATION']));
      };
    } else {
      ctrl.loadPresenceReports();
      toggleMessage.showMessages($filter('translate')(['presence_report.EDIT']));
    }
  };

  ctrl.updateEndTime = function(presenceReport) {
    if (presenceReport.report_time.slice(-1)[0].end_time == null) {
      if (presenceReport.report_time.slice(-1)[0].start_time !=
           new Date().toLocaleTimeString([], validTime)) {
        reportTime = presenceReport.report_time.slice(-1)[0];
        reportTime.end_time = new Date().toLocaleTimeString([], validTime);
        presenceReportService.updateEndTime(reportTime, presenceReport).then(function(reportTime) {
          return reportTime;
        });
      } else {
        toggleMessage.showMessages($filter('translate')(['presence_report.TIME']));
      }
    };
  };

  ctrl.deleteReportTime = function(reportTime, presenceReport) {
    if (confirm($filter('translate')('presence_report.CONFIRM'))) {
      presenceReportService.deleteReportTime(reportTime, presenceReport).then(function() {
        ctrl.loadPresenceReports();
      });
    }
  };

  ctrl.loadPresenceReports();
}
