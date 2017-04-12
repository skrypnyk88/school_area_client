var bottleComponent = require('./components/bottle_report.component.js'),
    bottleRoute = require('./bottle_report.route.js');
    require('../../css/style.scss');

module.exports = angular
	.module('bottle', [
		bottleComponent.name,
		bottleRoute.name
	]);