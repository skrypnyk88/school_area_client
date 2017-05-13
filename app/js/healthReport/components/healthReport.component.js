var service = require('./../../common/services/healthReport.service');

module.exports = angular
  .module('healthReport.component', [
    service.name
    ])
  .component('healthComponent', {
    templateUrl: './app/js/healthReport/components/healthReport.template.html',
    controller: HealthReportController
  });

HealthReportController.$inject = ['HealthReport', 'currentGroupDay', '$state'];

function HealthReportController(HealthReport, currentGroupDay, $state) {
  var ctrl = this;
  ctrl.reports = [];
  ctrl.currentGroupDay = currentGroupDay;

  ctrl.loadHealthReport = function() {
    HealthReport.getReports().then(
      function(data) {
        ctrl.reports = data;
      }
    );
  };

  ctrl.healthReportUpdate = function(report) {
    HealthReport.updateReports(report.report.health_note,
                               report.report.id,
                               report.report.special_care,
                               report.student.id
                               ).then(function() {
      return report;
    });
  };

  ctrl.reloadRoute = function() {
    ctrl.loadHealthReport();
    $state.reload($state.current);
  };

  ctrl.loadHealthReport();
};
