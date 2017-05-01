var resetPasswordResource = require('./../resources/resetPassword.resource.js');

module.exports = angular
  .module('resetPassword.service', [
    resetPasswordResource.name
  ])
  .factory('resetPasswordService', resetPasswordService);

resetPasswordService.$inject = ['resetPasswordResource'];

function resetPasswordService(resetPasswordResource) {
  var service = {
    reset: reset
  };
  return service;

  function reset(user) {
    resetPasswordResource.reset(user).$promise.then(
      function() {
      });
  };
};
