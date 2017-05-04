var forgotPasswordResource = require('./../resources/forgotPassword.resource.js');

module.exports = angular
  .module('forgotPassword.service', [
    forgotPasswordResource.name
  ])
  .factory('forgotPasswordService', forgotPasswordService);

forgotPasswordService.$inject = ['forgotPasswordResource', '$mdToast'];

function forgotPasswordService(forgotPasswordResource, $mdToast) {
  var service = {
    forgot: forgot,
    toggleErrorMsg: toggleErrorMsg
  };
  return service;

  function forgot(user) {
    forgotPasswordResource.forgot(user).$promise.then(
      function(response) {
        service.toggleErrorMsg(response);
      }, function(response) {
        service.toggleErrorMsg(response);
      });
  };

  function toggleErrorMsg(response) {
    var msg = response.data;

    $mdToast.show({
      template: '<md-toast><div class="md-toast-content">' +
                  msg +
                '</div></md-toast>',
      position: 'top right'
    });
  }
};
