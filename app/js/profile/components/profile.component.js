var service = require('./../../common/services/profile.service');

module.exports = angular
  .module('profile.component', [
    service.name
    ])
  .component('profileComponent', {
    templateUrl: './app/js/profile/components/profile.template.html',
    controller: ProfileController
  });

ProfileController.$inject = ['profileService',
                             'currentUser',
                             'toggleMessage',
                             'globalSettings',
                             '$state'];

function ProfileController(profileService, currentUser, toggleMessage, globalSettings, $state) {
  var ctrl = this;
  ctrl.teacher = currentUser;
  ctrl.showDiv = true;
  ctrl.avatar = ctrl.teacher.url || globalSettings.STUDENT_IMG;

  ctrl.hideDiv = function() {
    ctrl.showDiv = true;
  };

  ctrl.profileUpdate = function(teacher) {
    profileService.updateProfile(teacher).then(function() {
      ctrl.hideDiv();
      ctrl.reload();
    });
  };

  ctrl.uploadPhoto = function(teacher, file) {
    profileService.uploadPhoto(currentUser.id, file).then(
      function(response) {
        currentUser.url = response.url;
      }
    );
  };

  ctrl.reload = function() { $state.reload($state.current); };
};
