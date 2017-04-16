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
    }
  );

  ctrl.healthReportUpdate = function(student) {
    HealthReport.updateReports(student.health_note,
                               student.health_id,
                               student.special_care).then(function() {
      return student;
    });
  };
};
