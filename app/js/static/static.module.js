var staticComponent = require('./components/static.component.js');
var staticRoute = require('./static.route.js');

module.exports = angular
  .module('static', [
    staticComponent.name,
    staticRoute.name
  ]);