var profileVendor = require('./../../app/js/requirements.js');
var profileService = require('./../../app/js/common/services/profile.service.js');
var profileResource = require('./../../app/js/common/resources/profile.resource.js');
var constantsModule = require('./../../app/js/common/constants.js');
var valuesModule = require('./../../app/js/common/values.js');

describe('Profile Test', function() {
  var service;
  var $httpBackend;
  var teacher = {
      id: 4,
      first_name: 'Armando',
      last_name: 'Fox',
      locale: 'ua'
    };
  var badTeacher = {
      id: 6,
      first_name: 'Armando',
      last_name: 'Fox',
      locale: 'ua'
    };

  beforeEach(angular.mock.module(profileVendor.name,
                                 profileService.name,
                                 profileResource.name,
                                 constantsModule.name,
                                 valuesModule.name));

  beforeEach(inject(function($injector
                             ) {
    service = $injector.get('Profile');
    $httpBackend = $injector.get('$httpBackend');
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

  it('is should return teacher', function() {
    $httpBackend.whenGET('http://localhost:3000/v1/teachers/id.json').respond(teacher);
    var response;
    service.getProfile().then(function(profile) {
        response = profile;
      });
    $httpBackend.flush();
    expect(JSON.stringify(response)).toEqual(JSON.stringify(teacher));
  });

  it('is should not return teacher', function() {
    $httpBackend.whenGET('http://localhost:3000/v1/teachers/id.json').respond(teacher);
    var response;
    service.getProfile().then(function(profile) {
        response = profile;
      });
    $httpBackend.flush();
    expect(JSON.stringify(response)).not.toEqual(JSON.stringify(badTeacher));
  });

  it('is should updated bottle', function() {
    $httpBackend.whenPUT('http://localhost:3000/v1/teachers/id.json').respond(teacher);
    var response;
    service.updateProfile(teacher).then(function(updateProfile) {
      response = updateProfile;
    });
    $httpBackend.flush();
    expect(JSON.stringify(response)).toEqual(JSON.stringify(teacher));
  });

});

