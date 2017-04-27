var Resource = require('./../resources/profile.resource.js');

module.exports = angular
  .module('profile.service', [
    Resource.name
  ])
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
  };
}
