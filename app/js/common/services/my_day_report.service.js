var Resource = require('./../resources/my_day_report.resource.js');
module.exports = angular
  .module('myDayReport.service', [
    Resource.name
    ])
  .factory('MyDayReport', MyDayReport);

MyDayReport.$inject = ['myDayReportResource', 'currentGroupDay', '$mdToast'];
function MyDayReport(myDayReportResource, currentGroupDay, $mdToast) {
  var service = {
    getReports: getReports,
    updateReports: updateReports,
    toggleErrorMsg: toggleErrorMsg
  };
  return service;

  function getReports() {
    return myDayReportResource.query({group_id: currentGroupDay.group_id,
                                      day: currentGroupDay.day})
    .$promise.then(function(data) {
      return data;
    }, function(errors) {
      service.toggleErrorMsg(errors);
    });
  };

  function updateReports(note, id) {
    return myDayReportResource.update({report: {note: note},
                                      id: id,
                                      group_id: currentGroupDay.group_id,
                                      day: currentGroupDay.day})
    .$promise.then(function(note) {
      return note;
    }, function(errors) {
      service.toggleErrorMsg(errors);
    });
  };

  function toggleErrorMsg(response) {
    var msg = response.data.errors;

    $mdToast.show({
      template: '<md-toast><div class="md-toast-content">' +
                msg +
              '</div></md-toast>',
      position: 'top right'
    });
  }
};
