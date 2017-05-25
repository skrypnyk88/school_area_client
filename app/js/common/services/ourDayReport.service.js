var ourDayReportResource = require('./../resources/ourDayReport.resource.js');

module.exports = angular
  .module('ourDayReport.service', [ourDayReportResource.name])
  .factory('OurDayReportService', OurDayReportService);

OurDayReportService.$inject = ['ourDayReportResource', 'currentGroupDay', 'toggleMessage'];

function OurDayReportService(ourDayReportResource, currentGroupDay, toggleMessage) {
  var service = {
    getReport: getReport,
    updateReport: updateReport
  };
  return service;

  function getReport() {
    var params = {
      group_id: currentGroupDay.group_id,
      day: currentGroupDay.day
    };
    return ourDayReportResource.get(params).$promise.then(responseOk, responseFailure);
  };

  function responseOk(data) {
    return data;
  };

  function updateReport(description) {
    var params = {
      group_id: currentGroupDay.group_id,
      day: currentGroupDay.day,
      our_day: {description: description}
    };
    return ourDayReportResource.update(params).$promise.then(responseSuccess, responseFailure);
  };

  function responseSuccess(data) {
    toggleMessage.showMessages(['OK!']);
    return data;
  };

  function responseFailure(response) {
    toggleMessage.returnDataErrors(response);
    return response.data;
  };
};
