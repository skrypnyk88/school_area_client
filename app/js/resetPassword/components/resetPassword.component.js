var resetPasswordService = require('./../../common/services/resetPassword.service.js');

module.exports = angular
.module('resetPassword.component', [
  resetPasswordService.name
  ])
.component('resetComponent', {
  templateUrl: './app/js/resetPassword/components/resetPassword.template.html',
  controller: ResetPasswordController
});

ResetPasswordController.$inject = ['$location','resetPasswordService',];

function ResetPasswordController($location, resetPasswordService) {
  var ctrl = this;
  var token = $location.search().reset_password_token;

  ctrl.reset = function(user, valid) {
    if (valid) {
      user.reset_token = token;
      resetPasswordService.reset({user: user});
    }
  };
};
