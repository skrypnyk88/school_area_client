var passwordResource = require('./../resources/password.resource.js');

module.exports = angular
  .module('password.service', [
    passwordResource.name
  ])
  .factory('passwordService', passwordService);

passwordService.$inject = ['passwordResource', 'messageService', '$state'];

function passwordService(passwordResource, messageService, $state) {
  var service = {
    forgot: forgot,
    reset: reset,
    returnDataSuccess: returnDataSuccess,
    returnDataErrors: returnDataErrors
  };
  return service;

  function forgot(user) {
    return passwordResource.forgot(user).$promise.then(
      function(response) {
        service.returnDataSuccess(response);
        return response.data;
      }, function(response) {
        service.returnDataErrors(response);
        return response.data;
      });
  };

  function reset(user) {
    return passwordResource.reset(user).$promise.then(
      function(response) {
        $state.go('login');
        service.returnDataSuccess(response);
        return response.data;
      }, function(response) {
        service.returnDataErrors(response);
        return response.data;
      });
  };

  function returnDataSuccess(response) {
    return messageService.toggleMsg(response.data.success);
  }

  function returnDataErrors(response) {
    return messageService.toggleMsg(response.data.errors);
  }
};
