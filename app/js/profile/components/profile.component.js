var service = require('./../../common/services/profile.service');

module.exports = angular
  .module('profile.component', [
    service.name
    ])
  .component('profileComponent', {
    templateUrl: './app/js/profile/components/profile.template.html',
    controller: ProfileController
  });

ProfileController.$inject = ['profileService', 'currentUser', 'toggleMessage', 'globalSettings', '$state'];

function ProfileController(profileService, currentUser, toggleMessage, globalSettings, $state) {
  var ctrl = this;
  ctrl.teacher = [];

  ctrl.renderProfile = function() {profileService.getProfile(currentUser.id).then(
    function(data) {
      ctrl.teacher = data;
      ctrl.fullname = ctrl.teacher.first_name + ' ' + ctrl.teacher.last_name;
      ctrl.showDiv = true;
      ctrl.currentUser = currentUser;
      ctrl.avatar = ctrl.currentUser.url || globalSettings.STUDENT_IMG;

    });
  };

  ctrl.profileUpdate = function(teacher) {
    profileService.updateProfile(teacher).then(function() {
      return teacher;
    });
  };

  ctrl.uploadPhoto = function(teacher, file) {
    profileService.uploadPhoto(currentUser.id, file).then(
      function(response) {
        currentUser.url = response.url;
        // reload();
      },
      function(errors) {
        toggleMessage.showMessages(errors);
      }
    );
  };

  // var reload = function() { $state.reload($state.current); };
  ctrl.renderProfile();
};
