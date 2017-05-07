var Resource = require('./../resources/my_day_report.resource.js');
module.exports = angular
  .module('myDayReport.service', [
    Resource.name
    ])
  .factory('MyDayReport', MyDayReport);

MyDayReport.$inject = ['myDayReportResource', 'currentGroupDay'];
function MyDayReport(myDayReportResource, currentGroupDay) {
  var service = {
    getReports: getReports,
    updateReports: updateReports
  };
  return service;

  function getReports() {
    return myDayReportResource.query({group_id: currentGroupDay.group_id,
                                      day: currentGroupDay.day}).$promise.then(function(data) {
      return data;
    }, function(errors) {
      return errors;
    });
  };

  function updateReports(note, id) {
    return myDayReportResource.update({report: {note: note},
                                      id: id,
                                      group_id: currentGroupDay.group_id,
                                      day: currentGroupDay.day}).$promise.then(function(note) {
      return note;
    }, function(errors) {
      alert(errors.data.errors);
    });
  };
};
