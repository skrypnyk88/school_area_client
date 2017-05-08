var myDayReportService = require('./../../app/js/common/services/my_day_report.service.js');
var requirements = require('./../../app/js/requirements.js');
var values = require('./../../app/js/common/values.js');

describe('MyDayReport Test', function() {
  var service;
  var $httpBackend;

  beforeEach(angular.mock.module(requirements.name, myDayReportService.name, values.name));

  beforeEach(inject(function($injector) {
  	$httpBackend = $injector.get('$httpBackend');
    service = $injector.get('MyDayReport');
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('GetReports is define', function() {
    expect(service.getReports).toBeDefined();
  });

  it('UpdateReports is define', function() {
    expect(service.updateReports).toBeDefined();
  });

  //   it('GetReports works', function() {
  //   	var response = {};
  //   	 $httpBackend.expectGET("http://localhost:3000/v1/my_day_reports.json?group_id=1").respond(response)
  //   	 var returnedPromise = service.query({group_id: 1,
  //                                     day: '2017-05-08T14:39:58.775Z'});
  //   	 var result;
  //      returnedPromise.then(function (response) {
  //           result = response.data;
  //      });
  //   	$httpBackend.flush()
  //   expect(result).toEqual(response);
  // });
});
