var vendorModule = require('./../../app/js/requirements.js');
var passwordService = require('./../../app/js/common/services/password.service.js');
var toggleMessage =
  require('./../../app/js/common/services/toggleMessage/toggleMessage.service.js');
var constants = require('./../../app/js/common/constants.js');

describe('Service: Password', function() {
  var service;
  var $httpBackend;

  var successes = {
    success: ['Success message']
  };
  var errors = {
    errors: ['Error message']
  };
  var user = {user:
    {email: 'mshtogryn@gmail.com'}
  };

  beforeEach(angular.mock.module(vendorModule.name,
                                 passwordService.name,
                                 constants.name,
                                 toggleMessage.name));

  beforeEach(inject(function($injector) {
    service = $injector.get('passwordService');
    $httpBackend = $injector.get('$httpBackend');
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('forgot method is define', function() {
    expect(service.forgot).toBeDefined();
  });

  it('reset method is define', function() {
    expect(service.reset).toBeDefined();
  });

  it('forgot should return error message', inject(function(toggleMessage, globalSettings) {
    $httpBackend.whenPOST(globalSettings.SERVER_URL + '/passwords/' + 'forgot')
                .respond(400, errors);
    var response;
    spyOn(toggleMessage, 'showMessages');
    service.forgot(user).then(function(errorMsg) {
      response = errorMsg;
    });

    $httpBackend.flush();

    expect(JSON.stringify(response)).toEqual(JSON.stringify(errors));
  }));

  it('forgot should return success message', inject(function(toggleMessage, globalSettings) {
    $httpBackend.whenPOST(globalSettings.SERVER_URL + '/passwords/' + 'forgot')
                .respond(200, successes);
    var response;
    spyOn(toggleMessage, 'showMessages');
    service.forgot(user).then(function(successMsg) {
      response = successMsg;
    });

    $httpBackend.flush();

    expect(JSON.stringify(response)).toEqual(JSON.stringify(successes));
  }));

  it('reset should return error message', inject(function(toggleMessage) {
    $httpBackend.whenPOST('http://localhost:3000/passwords/' + 'reset').respond(400, errors);
    var response;
    spyOn(toggleMessage, 'showMessages');
    service.reset(user).then(function(errorMsg) {
      response = errorMsg;
    });

    $httpBackend.flush();

    expect(JSON.stringify(response)).toEqual(JSON.stringify(errors));
  }));
});
