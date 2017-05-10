module.exports = angular
  .module('toggleMessage.service', [])
  .factory('toggleMessage', toggleMessage);

toggleMessage.$inject = ['$mdToast'];

function toggleMessage($mdToast) {
  var service = {
<<<<<<< 432dd6448ea5a85579652742e0f542a28624147a
    showMessages: showMessages,
    returnDataSuccess: returnDataSuccess,
    returnDataErrors: returnDataErrors
=======
    showMessages: showMessages
>>>>>>> LVRUBYM-351: Add toggleMessage service
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
<<<<<<< 432dd6448ea5a85579652742e0f542a28624147a

  function returnDataSuccess(response) {
    return service.showMessages(response.data.success);
  }

  function returnDataErrors(response) {
    return service.showMessages(response.data.errors);
  }
=======
>>>>>>> LVRUBYM-351: Add toggleMessage service
}
