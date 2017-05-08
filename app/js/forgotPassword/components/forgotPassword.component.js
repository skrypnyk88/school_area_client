var passwordService = require('./../../common/services/password.service.js');

module.exports = angular
.module('forgotPassword.component', [
  passwordService.name
  ])
.component('forgotComponent', {
  templateUrl: './app/js/forgotPassword/components/forgotPassword.template.html',
  controller: ForgotPasswordController
});

ForgotPasswordController.$inject = ['passwordService'];

function ForgotPasswordController(passwordService) {
  var ctrl = this;

  ctrl.forgot = function(user, valid) {
    if (valid) {
      passwordService.forgot({user: user});
    }
  };
};
