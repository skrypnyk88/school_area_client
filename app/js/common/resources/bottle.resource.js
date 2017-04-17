module.exports = angular
.module('bottle.resource', [bottleCon.name])
.factory('bottleResource', bottleResource);

bottleResource.$inject = ['$resource', 'globalSettings'];

function bottleResource($resource, globalSettings) {
  return $resource(globalSettings
    .SERVER_URL_V1 + '/groups/21/bottle_reports/:bottle_report_id/bottles/:id.json',
    {id: '@id', bottle_report_id: '@bottle_report_id'},
    {
      'update': {method: 'PUT'}
    });
}
