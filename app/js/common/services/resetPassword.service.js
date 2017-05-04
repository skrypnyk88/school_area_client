var resetPasswordResource = require('./../resources/resetPassword.resource.js');

module.exports = angular
  .module('resetPassword.service', [
    resetPasswordResource.name
  ])
  .factory('resetPasswordService', resetPasswordService);

resetPasswordService.$inject = ['resetPasswordResource', '$mdToast', '$state'];

function resetPasswordService(resetPasswordResource, $mdToast, $state) {
  var service = {
    reset: reset,
    toggleErrorMsg: toggleErrorMsg
  };
  return service;

  function reset(user) {
    resetPasswordResource.reset(user).$promise.then(
      function(response) {
        $state.go('login');
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
