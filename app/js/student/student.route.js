module.exports = angular 
  .module('student.route', [])
  .config(function($stateProvider) {
    $stateProvider.state({
    	name: 'student',
    	template: '<student-component></student-component>'
    })
  })