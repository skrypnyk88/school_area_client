var OurDayReportService = require('./../../common/services/ourDayReport.service');

module.exports = angular
  .module('ourDayReport.component', [
    OurDayReportService.name
    ])
  .component('ourDayReportComponent', {
    templateUrl: './app/js/ourDayReport/components/ourDayReport.template.html',
    controller: ourDayReportController
  });

ourDayReportController.$inject = ['OurDayReportService'];

function ourDayReportController(OurDayReportService) {
  var ctrl = this;
  ctrl.students = [];
  ctrl.report = {};
  OurDayReportService.getReport().then(
    function(data) {
      ctrl.students = data.students;
      ctrl.report = data.our_day;
      console.log(ctrl.report);
      // console.log(ctrl.report.description);
    }
  );
  ctrl.ourDayReportUpdate = function(report) {
    OurDayReportService.updateReport(report)
      .then(function(description) {
      return description;
    });
  }
  //ourDayReport(OurDayReportService.getReport());
}
