var authService = require('./../../common/services/auth.service.js');

module.exports = angular
  .module('main.component', [
    authService.name
  ])
  .component('mainComponent', {
    templateUrl: './app/js/main/components/main.template.html',
    controller: MainController,
    bindings: {
      groups: '<'

    }
  });

MainController.$inject = [
  '$scope',
  '$state',
  'auth',
  'currentGroupDay',
  'currentUser',
  'globalSettings',
  '$translate'
];

function MainController($scope, $state, auth, currentGroupDay, currentUser, globalSettings,  $translate) {
  var ctrl = this;

  ctrl.currentGroupDay = currentGroupDay;
<<<<<<< d9d7a29521927b85dfed3c5ee9f0ab998ec013d4
<<<<<<< 84e0fcc266847b89c0aea5cdeb271beadaaeb1ce
<<<<<<< e10be0b01dcf0aed273bbfa06318df88200c0060
<<<<<<< 4ac0622ae5f72bcd5cc1cb348264d9c657b9d123
=======
  ctrl.menuItems = menuItems;
  ctrl.activeMenu = localStorage.getItem('activeMenu') || 0;
  ctrl.activeSubmenu = localStorage.getItem('activeSubmenu') || 0;
  ctrl.submenuOpened = false;
=======
>>>>>>> LVRUBYM-349:Fixed component
  ctrl.selectedDate = new Date();
  ctrl.monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  ctrl.dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  ctrl.nextDate = function() {
    ctrl.selectedDate.setDate(ctrl.selectedDate.getDate() + 1);
  };

  ctrl.pastDate = function() {
    ctrl.selectedDate.setDate(ctrl.selectedDate.getDate() - 1);
  };

>>>>>>> LVRUBYM-344: Create main template style
=======
>>>>>>> LVRUBYM-349:Deleted callendar
=======
  ctrl.currentUser = currentUser;
  ctrl.fullname = currentUser.first_name + ' ' + currentUser.last_name;
  ctrl.avatar = ctrl.currentUser.url || globalSettings.STUDENT_IMG;

>>>>>>> LVRUBYM-325: Change profile.template
  ctrl.logout = function() {
    auth.logout();
    localStorage.removeItem('activeMenu');
    localStorage.removeItem('activeSubmenu');
  };

  ctrl.changeLanguage = function(langKey) {
      $translate.use(langKey);
    };
  $scope.$watch(
    function() { return currentGroupDay.group_id; },
    function() { $state.reload($state.current); }
  );

  $scope.$watch(
    function() { return currentUser; },
    function(currentUser) { $scope.currentUser = currentUser; }
  );
};