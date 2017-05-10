var profileVendor = require('./../../app/js/requirements.js');
var profileService = require('./../../app/js/common/services/profile.service.js');
var constantsModule = require('./../../app/js/common/constants.js');
var valuesModule = require('./../../app/js/common/values.js');
var togle = require('./../../app/js/common/services/toggleMessage/toggleMessage.service.js');

describe('Profile Test', function() {
  var service;
  var $httpBackend;
  var teacherServiceRequest;
  var teacher = {
      id: 4,
      first_name: 'Armando',
      last_name: 'Fox',
      locale: 'ua'
    };

  beforeEach(angular.mock.module(profileVendor.name,
                                 profileService.name,
                                 constantsModule.name,
                                 valuesModule.name,
                                 togle.name));

  beforeEach(inject(function($injector) {
    service = $injector.get('profileService');
    $httpBackend = $injector.get('$httpBackend');
    constant = $injector.get('globalSettings');
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('getProfile is define', function() {
    expect(service.getProfile).toBeDefined();
  });

  it('updateProfile is define', function() {
    expect(service.updateProfile).toBeDefined();
  });

  it('should return teacher json when resolved', function() {
    $httpBackend.whenGET(constant.SERVER_URL_V1 + '/teachers/' + teacher.id + '.json')
      .respond(200, teacher);
    var response;
    service.getProfile(teacher.id).then(
      function(data) {
        response = data;
      }
    );

    $httpBackend.flush();

    expect(JSON.stringify(response)).toEqual(JSON.stringify(teacher));
  });

  it('is should updated teacher', function() {
    $httpBackend.whenPUT(constant.SERVER_URL_V1 + '/teachers/' + teacher.id + '.json')
      .respond(200, teacher);
    var response;
    service.updateProfile(teacher).then(function(updateProfile) {
      response = updateProfile;
    });

    $httpBackend.flush();

    expect(JSON.stringify(response)).toEqual(JSON.stringify(teacher));
  });
});
