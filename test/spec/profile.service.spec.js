var profileVendor = require('./../../app/js/requirements.js');
var profileService = require('./../../app/js/common/services/profile.service.js');
<<<<<<< 30ee6a80ac36fcf96bda9486cf7449bdd0d2742f
var constantsModule = require('./../../app/js/common/constants.js');
var valuesModule = require('./../../app/js/common/values.js');
var togle = require('./../../app/js/common/services/toggleMessage/toggleMessage.service.js');
=======
var profileResource = require('./../../app/js/common/resources/profile.resource.js');
var constantsModule = require('./../../app/js/common/constants.js');
var valuesModule = require('./../../app/js/common/values.js');
>>>>>>> LVRUBYM-325: Change profile.template

describe('Profile Test', function() {
  var service;
  var $httpBackend;
<<<<<<< 30ee6a80ac36fcf96bda9486cf7449bdd0d2742f
  var teacherServiceRequest;
=======
>>>>>>> LVRUBYM-325: Change profile.template
  var teacher = {
      id: 4,
      first_name: 'Armando',
      last_name: 'Fox',
      locale: 'ua'
    };
<<<<<<< 30ee6a80ac36fcf96bda9486cf7449bdd0d2742f

  beforeEach(angular.mock.module(profileVendor.name,
                                 profileService.name,
                                 constantsModule.name,
                                 valuesModule.name,
                                 togle.name));

  beforeEach(inject(function($injector) {
    service = $injector.get('profileService');
    $httpBackend = $injector.get('$httpBackend');
    constant = $injector.get('globalSettings');
=======
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
>>>>>>> LVRUBYM-325: Change profile.template
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

<<<<<<< 30ee6a80ac36fcf96bda9486cf7449bdd0d2742f
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
=======
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
>>>>>>> LVRUBYM-325: Change profile.template
    var response;
    service.updateProfile(teacher).then(function(updateProfile) {
      response = updateProfile;
    });
<<<<<<< 30ee6a80ac36fcf96bda9486cf7449bdd0d2742f

    $httpBackend.flush();

    expect(JSON.stringify(response)).toEqual(JSON.stringify(teacher));
  });
});
=======
    $httpBackend.flush();
    expect(JSON.stringify(response)).toEqual(JSON.stringify(teacher));
  });

});

>>>>>>> LVRUBYM-325: Change profile.template
