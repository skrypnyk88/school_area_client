var Resource = require('./../resources/profile.resource.js');

module.exports = angular
  .module('profile.service', [
    Resource.name
  ])
<<<<<<< 43c1e46ea7b1202edcb88ff46c4a6898d5cdd2e4
  .factory('profileService', profileService);

profileService.$inject = ['profileResource', '$mdToast', 'toggleMessage', '$q'];

function profileService(profileResource, $mdToast, toggleMessage, $q) {
  var service = {
    getProfile: getProfile,
    updateProfile: updateProfile,
    uploadPhoto: uploadPhoto
  };
  return service;

  function getProfile(id) {
    return profileResource.get({id: id}).$promise.then(responseSuccess, responseFailure);
  };

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
    toggleMessage.showMessages(response.data.errors);
=======
  .factory('Profile', Profile);

Profile.$inject = ['profileResource'];

function Profile(profileResource) {
  var service = {
    getProfile: getProfile,
    updateProfile: updateProfile
  };
  return service;
  var teacher = {first_name: first_name,
                last_name: last_name,
                email: email,
                phone: phone,
                locale: locale,
                id: id};

  function getProfile(first_name, last_name, email, phone, locale, id) {
    return profileResource.get(teacher).$promise.then(function(data) {
      return data;
    });
  };

  function updateProfile(first_name, last_name, email, phone, locale, id) {
    var params = {teacher: {first_name: first_name,
                            last_name: last_name,
                            email: email,
                            phone: phone,
                            locale: locale,
                            }, id: id};
    return profileResource.update(params).$promise.then(function(data) {
      return data;
    });
>>>>>>> LVRUBYM-325: Add component for profile
  };
}
