var service = require('./../../common/services/profile.service');

module.exports = angular
  .module('profile.component', [
    service.name
    ])
  .component('profileComponent', {
    templateUrl: './app/js/profile/components/profile.template.html',
    controller: ProfileController
  });

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
};
