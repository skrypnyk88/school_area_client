var napReportService = require('./../../common/services/napReport.service');
module.exports = angular
  .module('napReport.component', [
    napReportService.name
    ])
  .component('napComponent', {
    templateUrl: './app/js/napReport/components/napReport.template.html',
    controller: NapReportController
  });

NapReportController.$inject = ['napReportService','toggleMessage','$filter'];
function NapReportController(napReportService, toggleMessage, $filter) {

  var ctrl = this;
  var timeRegex = /^[\d\- ]{2}:[\d\- ]{2}$/;
  var validTime = {hour: '2-digit',
                  minute: '2-digit',
                  hour12: false
                };

  ctrl.loadNapReports = function() {
    napReportService.getNapReports().then(
      function(napReports) {
        ctrl.napReports = napReports;
      });
  };

  ctrl.addReportTime = function(napReport) {
    if (napReport.report_time == false || (napReport.report_time.slice(-1)[0].end_time &&
      (document.getElementById('myBtn_{reportTime.id}}_time').disabled) == false)) {
      document.getElementById('myBtn_{reportTime.id}}_time').disabled = true;
      napReport.start_time = new Date().toLocaleTimeString([], validTime);
      napReportService.addReportTime(napReport)
                       .then(function(reportTime) {
          napReport.report_time.push(reportTime);
          ctrl.loadNapReports();
          document.getElementById('myBtn_{reportTime.id}}_time').disabled = false;
        });
    };
  };

  ctrl.updateReportTime = function(reportTime, napReport) {
    if (reportTime.end_time != null) {
      if ((timeRegex.test(reportTime.start_time)) &&
           (timeRegex.test(reportTime.end_time))) {
        if (reportTime.start_time < reportTime.end_time &&
            reportTime.start_time != reportTime.end_time) {
          napReportService.updateReportTime(reportTime, napReport)
            .then(function(reportTime) {
            return reportTime;
          });
        } else {
          ctrl.loadNapReports();
          toggleMessage.showMessages($filter('translate')(['presence_report.TIME']));
        };
      } else {
        ctrl.loadNapReports();
        toggleMessage.showMessages($filter('translate')(['presence_report.VALIDATION']));
      };
    } else {
      ctrl.loadNapReports();
      toggleMessage.showMessages($filter('translate')(['presence_report.EDIT']));
    }
  };

  ctrl.updateEndTime = function(napReport) {
    if (napReport.report_time.slice(-1)[0].end_time == null) {
      if (napReport.report_time.slice(-1)[0].start_time !=
           new Date().toLocaleTimeString([], validTime)) {
        reportTime = napReport.report_time.slice(-1)[0];
        reportTime.end_time = new Date().toLocaleTimeString([], validTime);
        napReportService.updateEndTime(reportTime, napReport).then(function(reportTime) {
          return reportTime;
        });
      } else {
        toggleMessage.showMessages($filter('translate')(['presence_report.TIME']));
      }
    };
  };

  ctrl.deleteReportTime = function(reportTime, napReport) {
    if (confirm($filter('translate')('nap_report.CONFIRM'))) {
      napReportService.deleteReportTime(reportTime, napReport).then(function() {
        ctrl.loadNapReports();
      });
    }
  };

  ctrl.loadNapReports();
}
