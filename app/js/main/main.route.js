module.exports = angular
  .module('main.route', [])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/presence_report');
    $stateProvider.state('main', {
      name: 'main',
      template: '<main-component groups="$resolve.groups"></main-component>',
      resolve: {
        groups: getGroups,
      }
    });
  });

getGroups.$inject = ['groupService'];

function getGroups(groupService) {
  return groupService.getGroups();
}
