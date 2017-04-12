var bottleService = require('./../../common/services/bottle_report.service');

module.exports = angular
  .module('bottle.component', [
    bottleService.name
  ])
  .component('bottleComponent', {
    templateUrl: './app/js/bottle_report/components/bottle_report.template.html',
    controller: BottleController
  });

BottleController.$inject = ['bottleReport']
function BottleController(bottleReport) {
  var ctrl = this;
  ctrl.bottle_reports = [];

  bottleReport.getReports().then(
    function(report) {
      ctrl.bottle_reports = report
    })
}
