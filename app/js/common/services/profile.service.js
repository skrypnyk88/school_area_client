var Resource = require('./../resources/profile.resource.js');

module.exports = angular
  .module('profile.service', [
    Resource.name
  ])
  .factory('Profile', Profile);

Profile.$inject = ['profileResource', '$mdToast'];

function Profile(profileResource, $mdToast) {
  var service = {
    getProfile: getProfile,
    updateProfile: updateProfile,
    toggleErrorMsg: toggleErrorMsg
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
    var params = {teacher: {
                  first_name: first_name,
                  last_name: last_name,
                  email: email,
                  phone: phone,
                  locale: locale}, id: id};
    return profileResource.update(params).$promise.then(function(data) {
      return data;
    }, function(response) {
      service.toggleErrorMsg(response);
    });
  };

  function toggleErrorMsg(response) {
    var msg = response.data.errors;
    $mdToast.show({
      template: '<md-toast><div class="md-toast-content">' +
                  msg +
                '</div></md-toast>',
      position: 'top right'
    });
  };
}
