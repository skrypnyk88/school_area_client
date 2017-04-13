var Resource = require('./../resources/my_day_report.resource.js');
module.exports = angular
  .module('myDayReport.service', [
    Resource.name
    ])
  .factory('Report', Report);

Report.$inject = ['myDayReportResource'];
function Report(myDayReportResource) {
  var service = {
    getReports: getReports,
    updateReports: updateReports
  };
  return service;

  function getReports() {
    return myDayReportResource.query().$promise.then(function(data) {
      return data;
    });
  };

  function updateReports(note, id) {
    return myDayReportResource.update({report: {note: note},id: id}).$promise.then(function(note) {
      console.log(note);
      return note;
    });
  };
};
