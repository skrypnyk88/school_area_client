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
    reset: reset
  };
  return service;

  function forgot(user) {
    passwordResource.forgot(user).$promise.then(
      function(response) {
        messageService.toggleMsg(response);
      }, function(response) {
        messageService.toggleMsg(response);
      });
  };

  function reset(user) {
    passwordResource.reset(user).$promise.then(
      function(response) {
        $state.go('login');
        messageService.toggleMsg(response);
      }, function(response) {
        messageService.toggleMsg(response);
      });
  };
};
