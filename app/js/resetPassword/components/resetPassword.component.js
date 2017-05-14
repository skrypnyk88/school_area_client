var passwordService = require('./../../common/services/password.service.js');

module.exports = angular
.module('resetPassword.component', [
  passwordService.name
  ])
.component('resetComponent', {
  templateUrl: './app/js/resetPassword/components/resetPassword.template.html',
  controller: ResetPasswordController
});

ResetPasswordController.$inject = ['$location','passwordService',];

function ResetPasswordController($location, passwordService) {
  var ctrl = this;
  var token = $location.search().reset_password_token;

  ctrl.reset = function(user, valid) {
    if (valid) {
      user.reset_token = token;
      passwordService.reset({user: user});
    }
  };
};
