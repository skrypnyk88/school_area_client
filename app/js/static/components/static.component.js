module.exports = angular
  .module('static.component', [])
  .component('staticComponent', {
    templateUrl: './app/js/static/components/static.template.html',
    controller: StaticController
  });

function StaticController() {
  var ctrl = this;
};
