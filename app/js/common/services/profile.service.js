var Resource = require('./../resources/profile.resource.js');

module.exports = angular
  .module('profile.service', [
    Resource.name
  ])
  .factory('profileService', profileService);

profileService.$inject = ['profileResource', 'toggleMessage'];

function profileService(profileResource, toggleMessage) {
  var service = {
    updateProfile: updateProfile,
    uploadPhoto: uploadPhoto
  };
  return service;

  function updateProfile(teacher) {
    var params = {teacher: {
                  first_name: teacher.first_name,
                  last_name: teacher.last_name,
                  email: teacher.email,
                  phone: teacher.phone,
                  locale: teacher.locale}, id: teacher.id};
    return profileResource.update(params).$promise.then(responseSuccess, responseFailure);
  };

  function uploadPhoto(id, file) {
    var params = {
      id: id,
      file: file
    };
    return profileResource.upload(params).$promise.then(responseSuccess, responseFailure);
  };

  function responseSuccess(data) {
    return data;
  };

  function responseFailure(response) {
    toggleMessage.returnDataErrors(response);
    return response.data;
  };
}
