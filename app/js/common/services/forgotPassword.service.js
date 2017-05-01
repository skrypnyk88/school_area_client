var forgotPasswordResource = require('./../resources/forgotPassword.resource.js');

module.exports = angular
  .module('forgotPassword.service', [
    forgotPasswordResource.name
  ])
  .factory('forgotPasswordService', forgotPasswordService);

forgotPasswordService.$inject = ['forgotPasswordResource'];

function forgotPasswordService(forgotPasswordResource) {
  var service = {
    forgot: forgot
  };
  return service;

  function forgot(user) {
    forgotPasswordResource.forgot(user).$promise.then(
      function() {
      });
  };
};
