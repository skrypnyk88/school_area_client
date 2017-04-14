module.exports = angular
  .module('student.component', [])
  .component('studentComponent', {
    templateUrl: './app/js/student/components/student.template.html',
    bindings: {
      student: '='
    },
    controller: StudentController
  });

function StudentController() {
  var ctrl = this;
};
