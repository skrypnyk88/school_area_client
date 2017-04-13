var serv = require('./../../common/services/my_day_report.service');

module.exports = angular
  .module('myDayReport.component', [
    serv.name
  ])
  .component('myDayComponent', {
    templateUrl: './app/js/myDayReport/components/myDayReport.template.html',
    controller: MyDayReportController
  });

MyDayReportController.$inject = ['Report'];
function MyDayReportController(Report) {
  var ctrl = this;
  ctrl.students = [];
  Report.getReports().then(
    function(data) {
      console.log(data);
      ctrl.students = data;
    }
    );

  ctrl.myDayReportUpdate = function(note, id) {
    Report.updateReports(note, id).then(function() {
      return note;
    });
  };

}
