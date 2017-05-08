var presenceReportService = require('./../../app/js/common/services/presenceReport.service.js');
var requirements = require('./../../app/js/requirements.js');
var values = require('./../../app/js/common/values.js');
var constants = require('./../../app/js/common/constants.js');

describe('PresenceReport Test', function() {
  var service;
  var $httpBackend;

  beforeEach(angular.mock.module(requirements.name,
                                 presenceReportService.name,
                                 values.name,
                                 constants.name));

  beforeEach(inject(function($injector) {
    service = $injector.get('presenceReportService');
    $httpBackend = $injector.get('$httpBackend');
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('is define', function() {
    expect(service.getPresenceReports).toBeDefined();
  });

  it('is define', function() {
    expect(service.getReportTimes).toBeDefined();
  });

  it('is define', function() {
    expect(service.addReportTime).toBeDefined();
  });

  it('is define', function() {
    expect(service.deleteReportTime).toBeDefined();
  });

  it('is define', function() {
    expect(service.updateReportTime).toBeDefined();
  });

  it('is define', function() {
    expect(service.updateEndTime).toBeDefined();
  });
});
