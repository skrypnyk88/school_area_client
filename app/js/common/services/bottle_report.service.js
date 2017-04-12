var bottleResource = require('./../resources/bottle_report.resource.js');
module.exports = angular
  .module('bottle.service', [
    bottleResource.name
    ])
  .factory('bottleReport', bottleReport);

  bottleResource.$inject = ['bottleResource'];
  function bottleReport(bottleResource) {
  var service = {
    getReports: getReports
  };
  return service;
  
  
  function getReports() {
    return bottleResource.query().$promise.then(function(data) {
        return data;
      })
  };
};
