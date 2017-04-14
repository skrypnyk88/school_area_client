var myDayReportservice = require('./../../common/services/my_day_report.service');

module.exports = angular
  .module('myDayReport.component', [
    myDayReportservice.name
  ])
  .component('myDayComponent', {
    templateUrl: './app/js/myDayReport/components/myDayReport.template.html',
    controller: MyDayReportController
  });

MyDayReportController.$inject = ['MyDayReport'];
function MyDayReportController(MyDayReport) {
  var ctrl = this;
  ctrl.students = [];
  MyDayReport.getReports().then(
    function(data) {
      ctrl.students = data;
    }
    );

  ctrl.myDayReportUpdate = function(student) {
    MyDayReport.updateReports(student.my_day_report_note, student.my_day_report_id)
      .then(function(note) {
      return note;
    });
  };

}
