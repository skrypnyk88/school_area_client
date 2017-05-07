var myDayReportService = require('./../../app/js/common/services/my_day_report.service.js');
var requirements = require('./../../app/js/requirements.js');
var values = require('./../../app/js/common/values.js');

describe('MyDayReport Test', function() {
  var service;
  var $httpBackend;

  beforeEach(angular.mock.module(requirements.name, myDayReportService.name, values.name));

  beforeEach(inject(function($injector) {
    service = $injector.get('MyDayReport');
    $httpBackend = $injector.get('$httpBackend');
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('is define', function() {
    expect(service.getReports).toBeDefined();
  });
});
