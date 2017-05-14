module.exports = angular
  .module('toggleMessage.service', [])
  .factory('toggleMessage', toggleMessage);

toggleMessage.$inject = ['$mdToast'];

function toggleMessage($mdToast) {
  var service = {
    showMessages: showMessages,
    returnDataSuccess: returnDataSuccess,
    returnDataErrors: returnDataErrors
  };
  return service;

  function showMessages(msgArray) {
    var templateUrl = './app/js/common/services/toggleMessage/toggleMessage.template.html';

    $mdToast.show({
        templateUrl: templateUrl,
        controllerAs: '$ctrl',
        controller: function() {
          var ctrl = this;

          ctrl.closeToast = function() {
            $mdToast.hide();
          };
        },
        locals: {messages: msgArray},
        bindToController: true,
        position: 'top right',
        hideDelay: 10000
      }
    );
  };

  function returnDataSuccess(response) {
    return service.showMessages(response.data.success);
  }

  function returnDataErrors(response) {
    return service.showMessages(response.data.errors);
  }
}
