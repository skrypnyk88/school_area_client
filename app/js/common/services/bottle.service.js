var bottleResource = require('./../resources/bottle.resource.js');
module.exports = angular
  .module('bottle.service', [
    bottleResource.name
    ])
  .factory('bottleService', bottleService);

  bottleService.$inject = ['bottleResource'];

  function bottleService(bottleResource) {
  var service = {
    getBottles: getBottles,
    addBottle: addBottle,
    deleteBottle: deleteBottle,
    updateBottle: updateBottle
  };
  return service;
  
  
  function getBottles(bottle_report_id) {
    return bottleResource.query({ bottle_report_id: bottle_report_id }).$promise.then(function(bottles) {
        return bottles;
      })
  };

   function addBottle(bottle_report_id) {
    return bottleResource.save({ bottle_report_id: bottle_report_id }).$promise.then(function(bottle) {
        return bottle;
      })
  };

  function deleteBottle(bottle) {
    return bottleResource.delete({ id: bottle.id, bottle_report_id: bottle.bottle_report_id }).$promise.then(function() {
     
    })
  };  

  function updateBottle(bottle) {
    return bottleResource.update({bottle: bottle, id: bottle.id, bottle_report_id: bottle.bottle_report_id}).$promise.then(function(updatedBottle) {
        return updatedBottle;
      })
  };
};
