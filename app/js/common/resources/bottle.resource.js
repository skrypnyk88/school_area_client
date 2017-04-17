var bottleCon = require('./../constants.js');
module.exports = angular
  .module('bottle.resource', [
    bottleCon.name
  ])
  .factory('bottleResource', bottleResource)


bottleResource.$inject = ['$resource', 'api'];

function bottleResource($resource, api) {
  return $resource(api.URL + '/groups/21/bottle_reports/:bottle_report_id/bottles/:id.json',
  	{ id: '@id', bottle_report_id: '@bottle_report_id'},
  {
       'update': { method:'PUT' }
   });
}


