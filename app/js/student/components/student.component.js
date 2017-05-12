module.exports = angular
  .module('student.component', [])
  .component('studentComponent', {
    templateUrl: './app/js/student/components/student.template.html',
    bindings: {
      student: '='
    },
    controller: StudentController
  });

StudentController.$inject = ['studentService', 'globalSettings'];

function StudentController(studentService, globalSettings) {
  var ctrl = this;

  ctrl.defaultPhoto = globalSettings.STUDENT_IMG;

  ctrl.uploadPhoto = function(student, file) {
    studentService.uploadPhoto(student.id, file).then(
      function(response) {
        student.url = response.url;
      }
    );
  };
};
