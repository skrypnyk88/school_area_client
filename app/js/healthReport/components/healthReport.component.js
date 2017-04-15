var service = require('./../../common/services/healthReport.service');

module.exports = angular
  .module('healthReport.component', [
    service.name
    ])
  .component('healthComponent', {
    templateUrl: './app/js/healthReport/components/healthReport.template.html',
    controller: HealthReportController
  });

HealthReportController.$inject = ['HealthReport'];

function HealthReportController(HealthReport) {
  var ctrl = this;
  ctrl.students = [];

  HealthReport.getReports().then(
    function(data) {
      ctrl.students = data;
      console.log(ctrl.students)
    }
  );


  ctrl.healthReportUpdate = function(student) {
    console.log(student.health_care)
    HealthReport.updateReports(student.health_note,
                               student.health_id,
                               student.health_care).then(function() {
      return student;
    });
  };

  //   ctrl.healthReportUpdate = function(health_note, id) {
  //   HealthReport.updateReports(health_note, id).then(function() {
  //     return health_note;
  //   });
  // };
};
