var vendorModule = require('./../../app/js/requirements.js');
var constantsModule = require('./../../app/js/common/constants.js');
var valuesModule = require('./../../app/js/common/values.js');
var toggleMessage =
  require('./../../app/js/common/services/toggleMessage/toggleMessage.service.js');
var studentService = require('./../../app/js/common/services/student.service.js');

describe('Service: Student', function() {
  var service;
  var $httpBackend;
  var studentServiceRequest;

  var student = {
    id: 1,
    first_name: 'First name',
    last_name: 'Last Name',
    birthdate: '2010-06-20',
    gender: 'female',
    age: 4,
    url: null
  };

  var file = {
    filename: 'test.png',
    filetype: 'image/png',
    base64: 'base64'
  };

  var errors = {
    errors: ['Error message']
  };

  beforeEach(angular.mock.module(vendorModule.name,
                                 constantsModule.name,
                                 valuesModule.name,
                                 toggleMessage.name,
                                 studentService.name));

  beforeEach(inject(function($injector) {
    service = $injector.get('studentService');
    constants = $injector.get('globalSettings');
    $httpBackend = $injector.get('$httpBackend');

    studentServiceResponse = $httpBackend
      .whenPUT(constants.SERVER_URL_V1 + '/students/' + student.id + '/upload.json')
      .respond(200, student);
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('#uploadPhoto is defined', function() {
    expect(service.uploadPhoto).toBeDefined();
  });

  it('should return student json when resolved', function() {
    var response;
    service.uploadPhoto(student.id, file).then(
      function(data) {
        response = data;
      });

    $httpBackend.flush();

    expect(JSON.stringify(response)).toEqual(JSON.stringify(student));
  });

  it('reset should return error message', inject(function(toggleMessage) {
      studentServiceResponse.respond(400, errors);

      var errorsResponse;
      spyOn(toggleMessage, 'showMessages');
      service.uploadPhoto(student.id, file).then(
        function(response) {
          errorsResponse = response.data;
        });

      $httpBackend.flush();

      expect(JSON.stringify(errorsResponse)).toEqual(JSON.stringify(errors));
    }));
});

