var bottleReportService = require('./../../common/services/bottleReport.service');

module.exports = angular
.module('bottleReport.component', [
  bottleReportService.name,
  ])
.component('bottleReport', {
  templateUrl: './app/js/bottleReport/components/bottleReport.template.html',
  controller: BottleReportController
});

BottleReportController.$inject = ['bottleReportService'];

function BottleReportController(bottleReportService) {
  var ctrl = this;

  ctrl.loadBottleReports = function() {
    bottleReportService.getBottleReports().then(
      function(bottleReports) {
        ctrl.bottleReports = bottleReports;
    });
  };

  ctrl.addBottle = function(bottleReport) {
    bottleReportService.addBottle(bottleReport)
                 .then(function(bottle) {
      bottleReport.bottles.push(bottle);
    });
  };

  ctrl.updateBottle = function(bottle, bottleReport) {
    bottleReportService.updateBottle(bottle, bottleReport).then(function(bottle) {
      return bottle;
    });
  };

  ctrl.deleteBottle = function(bottle, bottleReport) {
    if (confirm('Are you sure, you want to delete this bottle?')) {
      bottleReportService.deleteBottle(bottle, bottleReport).then(function() {
        ctrl.loadBottleReports();
      });
    }
  };
  ctrl.loadBottleReports();
};
