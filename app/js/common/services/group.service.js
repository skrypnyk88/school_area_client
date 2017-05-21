var groupResource = require('./../resources/group.resource.js');

module.exports = angular
  .module('group.service', [
    groupResource.name
  ])
  .factory('groupService', groupService);

groupService.$inject = ['groupResource', 'currentGroupDay'];

function groupService(groupResource, currentGroupDay) {
  var service = {
    getGroups: getGroups
  };
  return service;

  function getGroups() {
    return groupResource.query().$promise.then(function(data) {
      currentGroupDay.group_id = data[0].id;
      return data;
    });
  };
}
