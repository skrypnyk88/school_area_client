var mainComponent = require('./components/main.component.js'),
    mainRoute = require('./main.route.js'),
    bottleModule = require('.././bottle_report/bottle_report.module.js');
	require('../../css/style.scss');

module.exports = angular
  .module('school_area.main', [
    mainComponent.name,
    mainRoute.name,
    bottleModule.name
  ]);
