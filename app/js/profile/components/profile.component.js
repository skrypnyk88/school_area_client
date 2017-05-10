var service = require('./../../common/services/profile.service');

module.exports = angular
  .module('profile.component', [
    service.name
    ])
  .component('profileComponent', {
    templateUrl: './app/js/profile/components/profile.template.html',
    controller: ProfileController
  });

ProfileController.$inject = ['profileService', 'currentUser'];

function ProfileController(profileService, currentUser) {
  var ctrl = this;
  ctrl.teacher = [];

  ctrl.renderProfile = function() {profileService.getProfile(currentUser.id).then(
    function(data) {
      ctrl.teacher = data;
      ctrl.fullname = ctrl.teacher.first_name + ' ' + ctrl.teacher.last_name;
      ctrl.showDiv = true;
    });
  };

  ctrl.profileUpdate = function(teacher) {
    profileService.updateProfile(teacher).then(function() {
      return teacher;
    });
  };
  ctrl.renderProfile();
};
