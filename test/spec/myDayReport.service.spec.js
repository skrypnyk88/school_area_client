var myDayReportService = require('./../../app/js/common/services/my_day_report.service.js');
var requirements = require('./../../app/js/requirements.js');
var constantsModule = require('./../../app/js/common/constants.js');
var values = require('./../../app/js/common/values.js');

describe('MyDayReport Test', function() {
  var service;
  var $httpBackend;

  var myDayReports = {};

  var my_day = {day: '2017-02-05',
                note: 'changed2',
                updated_at: '2017-05-06T17:09:44.215Z'
              };

  var my_day_report = {student: {
    id: 1,
    first_name: 'Viva',
    last_name: 'Hamill'},
    my_day_report: {
      id: 151,
      note: null}};

  beforeEach(angular.mock.module(requirements.name,
                                 constantsModule.name,
                                 values.name,
                                 myDayReportService.name));

  beforeEach(inject(function($injector) {
    service = $injector.get('MyDayReport');
    $httpBackend = $injector.get('$httpBackend');
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

  it('is should return all MyDay reports', function() {
    $httpBackend.whenGET('http://localhost:3000/v1/my_day_reports.json?day=2017-05-07&group_id=2')
    .respond(myDayReports);
    var response;
    service.getReports().then(function(myReports) {
      response = myReports;
    });
    console.log(response);
    console.log(myDayReports);
    $httpBackend.flush();
    expect(JSON.stringify(response)).toEqual(JSON.stringify(myDayReports));
  });

  it('is should updated report', function() {
    $httpBackend.whenPUT('http://localhost:3000/v1/my_day_reports/' +
     my_day_report.my_day_report.id + '.json?group_id=1')
    .respond(my_day_report);
    var response;
    service.updateReports(my_day_report, my_day.note).then(function(updatedReport) {
      response = updatedReport;
    });
    console.log(response);
    console.log(my_day_report);
    $httpBackend.flush();
    expect(JSON.stringify(response)).toEqual(JSON.stringify(bottle));
  });
});
