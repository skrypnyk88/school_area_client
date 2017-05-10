var Resource = require('./../resources/profile.resource.js');

module.exports = angular
  .module('profile.service', [
    Resource.name
  ])
  .factory('profileService', profileService);

profileService.$inject = ['profileResource', '$mdToast', 'toggleMessage'];

function profileService(profileResource, $mdToast, toggleMessage) {
  var service = {
    getProfile: getProfile,
    updateProfile: updateProfile
  };
  return service;

  function getProfile(id) {
    return profileResource.get({id: id}).$promise.then(function(data) {
      return data;
    }, function(response) {
      toggleMessage.showMessages(response.data.errors);
    });
  };

  function updateProfile(teacher) {
    var params = {teacher: {
                  first_name: teacher.first_name,
                  last_name: teacher.last_name,
                  email: teacher.email,
                  phone: teacher.phone,
                  locale: teacher.locale}, id: teacher.id};
    return profileResource.update(params).$promise.then(function(data) {
      return data;
    }, function(response) {
      toggleMessage.showMessages(response.data.errors);
    });
  };
}
