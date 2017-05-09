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
    if (Array.isArray(response.data)) {
      var msgs = response.data.join('; ');
    } else {
      var msgs = response.data;
    }

    var toast = $mdToast.simple()
      .textContent(msgs)
      .action('OK')
      .highlightAction(false)
      .position('top right')
      .hideDelay(9000);

    $mdToast.show(toast);
  }
};
