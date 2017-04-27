var service = require('./../../common/services/profile.service');

module.exports = angular
  .module('profile.component', [
    service.name
    ])
  .component('profileComponent', {
    templateUrl: './app/js/profile/components/profile.template.html',
    controller: ProfileController
  });

<<<<<<< 43c1e46ea7b1202edcb88ff46c4a6898d5cdd2e4
ProfileController.$inject = ['profileService',
                             'currentUser',
                             'toggleMessage',
                             'globalSettings',
                             '$state'];

function ProfileController(profileService, currentUser, toggleMessage, globalSettings, $state) {
  var ctrl = this;
  ctrl.teacher = currentUser;
  ctrl.fullname = ctrl.teacher.first_name + ' ' + ctrl.teacher.last_name;
  ctrl.showDiv = true;
  ctrl.avatar = ctrl.teacher.url || globalSettings.STUDENT_IMG;

  ctrl.renderProfile = function() {profileService.getProfile(currentUser.id).then(
    function(data) {
      ctrl.teacher = data;
    });
  };

  ctrl.hideDiv = function() {
    ctrl.showDiv = true;
  };

  ctrl.profileUpdate = function(teacher) {
    profileService.updateProfile(teacher).then(function() {
      currentUser = teacher;
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
=======
ProfileController.$inject = ['Profile'];

function ProfileController(Profile) {
  var ctrl = this;
  ctrl.teacher = [];

  Profile.getProfile().then(
    function(data) {
      ctrl.teacher = data;
    }
  );

  ctrl.profileUpdate = function(teacher) {
    Profile.updateProfile(teacher.first_name,
                          teacher.last_name,
                          teacher.email,
                          teacher.phone,
                          teacher.locale,
                          teacher.id).then(function() {
      return teacher;
    });
  };
>>>>>>> LVRUBYM-325: Add component for profile
};
