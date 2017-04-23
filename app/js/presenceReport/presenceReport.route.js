module.exports = angular
  .module('presenceReport.route', [])
<<<<<<< 379f0a8c4c1289155443946b2927dc8657f0fd6c
  .config(['$stateProvider',
    function($stateProvider) {
      $stateProvider.state('main.presenceReport', {
        url: '/presence_report',
        template: '<presence-component></presence-component>'
      });
    }]);
=======
  .config(function($stateProvider) {
    $stateProvider.state('main.presenceReport', {
      url: '/presence_report',
      template: '<presence-report></presence-report>'
    });
  });
>>>>>>> LVRUBYM-191: created presenceReport
