var bottleCon = require('./../constants.js');
module.exports = angular
<<<<<<< 7e2b78612584ecdd869040d8426b59d05d3d472d
.module('bottle.resource', [])
.factory('bottleResource', bottleResource);

bottleResource.$inject = ['$resource', 'globalSettings'];

function bottleResource($resource, globalSettings) {
  return $resource(globalSettings
    .SERVER_URL_V1 + '/bottle_reports/:bottle_report_id/bottles/:id.json',
    {id: '@id',
    bottle_report_id: '@bottle_report_id'},
    {
      'update': {method: 'PUT'}
    });
}
=======
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


>>>>>>> LVRUBYM-221:Add component for bottle report
