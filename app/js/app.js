var angular = require('angular'),
	mainModule = require('./main/main.module.js'),
    vendorModule = require('./requirements.js');
    

angular
  .module('school_area', [
    vendorModule.name,
    mainModule.name
  ])
  .config(function($locationProvider) {
    $locationProvider.html5Mode(true);
  });
  