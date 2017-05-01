var forgotPasswordService = require('./../../common/services/forgotPassword.service.js');

module.exports = angular
.module('forgotPassword.component', [
  forgotPasswordService.name
  ])
.component('forgotComponent', {
  templateUrl: './app/js/forgotPassword/components/forgotPassword.template.html',
  controller: ForgotPasswordController
});

ForgotPasswordController.$inject = ['forgotPasswordService'];

function ForgotPasswordController(forgotPasswordService) {
  var ctrl = this;

  ctrl.forgot = function(user, valid) {
    if (valid) {
      forgotPasswordService.forgot({user: user});
    }
  };
};
