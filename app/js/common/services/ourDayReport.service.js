var ourDayReportResource = require('./../resources/ourDayReport.resource.js');

module.exports = angular
  .module('ourDayReport.service', [ourDayReportResource.name])
  .factory('OurDayReportService', OurDayReportService);

OurDayReportService.$inject = ['ourDayReportResource', 'currentGroupDay'];

function OurDayReportService(ourDayReportResource, currentGroupDay) {
  var service = {
   getReport: getReport,
   updateReport: updateReport
  };
  return service;

  function getReport(){
    var params = {
      group_id: currentGroupDay.group_id,
      day: currentGroupDay.day
    }
    return ourDayReportResource.get(params).$promise.then(function(data) {
      console.log(data);
      return data;
    });
  };

  function updateReport(description) {
    var params = {
      // id: '9',
      group_id: currentGroupDay.group_id,
      day: currentGroupDay.day,
      our_day: {description: description}
    };
    return ourDayReportResource.update(params).$promise.then(function(description){
      return description;
    });
  };
};
