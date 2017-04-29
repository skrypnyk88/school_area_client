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

  ctrl.timePattern = '([01]?[0-9]{1}|2[0-3]{1}):[0-5]{1}[0-9]{1}';

  var loadBottleReports = function() {
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
<<<<<<< 78cc606e23ca9236ad1c001671c581f64c62f056
        loadBottleReports();
      });
    }
  };
  loadBottleReports();
=======
        ctrl.loadBottleReports();
      });
    }
  };
  ctrl.loadBottleReports();
>>>>>>> LVRUBYM-221:Fixed file's name
};
