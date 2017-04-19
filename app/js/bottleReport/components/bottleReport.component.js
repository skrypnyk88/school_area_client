var bottleReportServ = require('./../../common/services/bottle_report.service');
var bottleServ = require('./../../common/services/bottle.service');

module.exports = angular
.module('bottleReport.component', [
  bottleReportServ.name,
  bottleServ.name
  ])
.component('bottleReportComponent', {
  templateUrl: './app/js/bottle_report/components/bottle_report.template.html',
  controller: BottleReportController
});

BottleReportController.$inject = ['bottleReportService','bottleService'];

function BottleReportController(bottleReportService, bottleService) {
  var ctrl = this;

  ctrl.loadBottleReports = function() {
    bottleReportService.getBottleReports().then(
      function(bottleReports) {
        ctrl.bottleReports = bottleReports;
      });
  };

  ctrl.addBottle = function(bottleReport) {
    bottleService.addBottle(bottleReport)
                 .then(function(bottle) {
      bottleReport.bottles.push(bottle);
    });
  };

  ctrl.updateBottle = function(bottle, bottleReport) {
    bottleService.updateBottle(bottle, bottleReport).then(function(bottle) {
      return bottle;
    });
  };

  ctrl.deleteBottle = function(bottle, bottleReport) {
    if (confirm('Are you sure, you want to delete this bottle?')) {
      bottleService.deleteBottle(bottle, bottleReport).then(function() {
        ctrl.loadBottleReports();
      });
    }
  };
  ctrl.loadBottleReports();
}
