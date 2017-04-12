module.exports = angular
	.module('bottle.constants', [])
	.constant('api',{
		URL: 'http://localhost:3000/v1'
	})
	.constant('Messages', {
		Error: ''
	});