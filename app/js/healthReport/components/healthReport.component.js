module.exports = angular
  .module('healthReport.component', [])
  .component('healthComponent', {
    templateUrl: './app/js/healthReport/components/healthReport.template.html',
    controller: HealthReportController
  });

function HealthReportController() {
  var ctrl = this;
};
