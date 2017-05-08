module.exports = angular
.module('message.service', [
  ])
.factory('messageService', messageService);

messageService.$inject = ['$mdToast'];

function messageService($mdToast) {
  var service = {
    toggleMsg: toggleMsg
  };
  return service;

  function toggleMsg(response) {
    var msg = response.data.errors;
    $mdToast.show({
      template: '<md-toast><div class="md-toast-content">' +
                  msg +
                '</div></md-toast>',
      position: 'top right'
    });
  }
};
