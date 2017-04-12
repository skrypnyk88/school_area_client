module.exports = angular
	.module('bottle.route', [])
	.config(function($stateProvider) {
    $stateProvider.state({
      url: '/bottle_reports',
      name: 'bottle_report',
      template: '<bottle-component></bottle-component>'
    })
  })