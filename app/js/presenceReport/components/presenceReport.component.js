module.exports = angular
  .module('presenceReport.component', [])
  .component('presenceComponent', {
    templateUrl: './app/js/presenceReport/components/presenceReport.template.html',
    controller: PresenceReportController
  });
function PresenceReportController() {
  var ctrl = this;
};
