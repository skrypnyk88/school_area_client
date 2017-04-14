module.exports = angular
	.module('pottyReport.component',[])
	.component('pottyComponent',{
		templateUrl: './app/js/pottyReport/components/pottyReport.template.html',
		controller: PottyReportController
	});

	function PottyReportController(){
		var ctrl = this;
	}