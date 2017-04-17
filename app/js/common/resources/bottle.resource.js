var bottleCon = require('./../constants.js');
module.exports = angular
<<<<<<< c1277f2601881303dd01af6f108129014ab59b51
<<<<<<< 7e2b78612584ecdd869040d8426b59d05d3d472d
.module('bottle.resource', [])
=======
.module('bottle.resource', [bottleCon.name])
>>>>>>> LVRUBYM-221:Add action on front-end
.factory('bottleResource', bottleResource);

bottleResource.$inject = ['$resource', 'globalSettings'];

function bottleResource($resource, globalSettings) {
  return $resource(globalSettings
<<<<<<< c1277f2601881303dd01af6f108129014ab59b51
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
=======
    .SERVER_URL_V1 + '/groups/21/bottle_reports/:bottle_report_id/bottles/:id.json',
    {id: '@id', bottle_report_id: '@bottle_report_id'},
    {
      'update': {method: 'PUT'}
    });
}
>>>>>>> LVRUBYM-221:Add action on front-end
