var StudentComponent = require('./components/student.component.js');
var StudentRoute = require('./student.route.js');

module.exports = angular
  .module('student', [
    StudentComponent.name,
    StudentRoute.name	
  	])