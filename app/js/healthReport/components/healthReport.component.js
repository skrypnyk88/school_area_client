var serv = require('./../../common/services/healthReport.service');

module.exports = angular
  .module('healthReport.component', [serv.name])
  .component('healthComponent', {
    templateUrl: './app/js/healthReport/components/healthReport.template.html',
    controller: HealthReportController
  });

function HealthReportController() {
  var ctrl = this;
  ctrl.users = [];
  // this.name1 = 'asdasd';
  console.log('Report');
  Report.getReports().then(
    function(a) {
      console.log(a);
      ctrl.users = a;
    });
  console.log('ctrl.a');
};

// module.exports = angular
//   .module('healthReport.component', [])
//   .component('healthComponent', {
//     templateUrl: './app/js/healthReport/components/healthReport.template.html',
//     controller: HealthReportController
//   });

// function HealthReportController() {
//   var ctrl = this;
// };

