var bottleCon = require('./../constants.js');
module.exports = angular
  .module('bottle.resource', [
  	bottleCon.name
  ])
  .factory('bottleResource', bottleResource)


bottleResource.$inject = ['$resource', 'api'];

function bottleResource($resource, api) {
	return $resource(api.URL + '/groups/21/bottle_reports.json',
    {
        'update': { method:'PUT' }
    });
}