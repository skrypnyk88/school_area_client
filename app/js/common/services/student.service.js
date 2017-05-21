var studentResource = require('./../resources/student.resource.js');

module.exports = angular
  .module('student.service', [
    studentResource.name
  ])
  .factory('studentService', studentService);

studentService.$inject = ['studentResource', 'currentGroupDay', 'toggleMessage'];

function studentService(studentResource, currentGroupDay, toggleMessage) {
  var service = {
    uploadPhoto: uploadPhoto
  };
  return service;

  function uploadPhoto(id, file) {
    var params = {
      id: id,
      group_id: currentGroupDay.group_id,
      file: file
    };
    return studentResource.upload(params).$promise.then(
      function(data) {
        return data;
      },
      function(response) {
        toggleMessage.showMessages(response.data.errors);
      }
    );
  };
}
