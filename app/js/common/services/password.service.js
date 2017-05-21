var passwordResource = require('./../resources/password.resource.js');

module.exports = angular
  .module('password.service', [
    passwordResource.name
  ])
  .factory('passwordService', passwordService);

passwordService.$inject = ['passwordResource', 'toggleMessage', '$state'];

function passwordService(passwordResource, toggleMessage, $state) {
  var service = {
    forgot: forgot,
    reset: reset
  };
  return service;

  function forgot(user) {
    return passwordResource.forgot(user).$promise.then(
      function(response) {
        toggleMessage.returnDataSuccess(response);
        return response.data;
      }, function(response) {
        toggleMessage.returnDataErrors(response);
        return response.data;
      });
  };

  function reset(user) {
    return passwordResource.reset(user).$promise.then(
      function(response) {
        $state.go('login');
        toggleMessage.returnDataSuccess(response);
        return response.data;
      }, function(response) {
        toggleMessage.returnDataErrors(response);
        return response.data;
      });
  };
};
