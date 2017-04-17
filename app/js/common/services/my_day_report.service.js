var myDayReportResource = require('./../resources/my_day_report.resource.js');

module.exports = angular
  .module('myDayReport.service', [
    myDayReportResource.name
    ])
  .factory('MyDayReport', MyDayReport);

MyDayReport.$inject = ['myDayReportResource'];

function MyDayReport(myDayReportResource) {
  var service = {
    getReports: getReports,
    updateReport: updateReport
  };
  return service;

  function getReports() {
    return myDayReportResource.query().$promise.then(function(data) {
      return data;
    });
  };

  function updateReport(note, id) {
    var params = {report: {note: note},id: id};
    return myDayReportResource.update(params).$promise.then(function(note) {
      return note;
    });
  };
};
