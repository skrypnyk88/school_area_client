var service = require('./../../common/services/my_day_report.service');

module.exports = angular
  .module('myDayReport.component', [
    service.name
  ])
  .component('myDayComponent', {
    templateUrl: './app/js/myDayReport/components/myDayReport.template.html',
    controller: MyDayReportController
  });

MyDayReportController.$inject = ['MyDayReport'];
function MyDayReportController(MyDayReport) {
  var ctrl = this;
  ctrl.photo = 'app/img/photo.png';
  ctrl.students = [];
  MyDayReport.getReports().then(
    function(data) {
      ctrl.students = data;
    }
    );

  ctrl.myDayReportUpdate = function(note, id) {
    MyDayReport.updateReports(note, id).then(function() {
      return note;
    });
  };

}
