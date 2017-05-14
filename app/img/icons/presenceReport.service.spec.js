var vendorModule = require('./../../app/js/requirements.js');
var constantsModule = require('./../../app/js/common/constants.js');
var valuesModule = require('./../../app/js/common/values.js');
var reportTimeResource = require('./../../app/js/common/resources/reportTime.resource.js');
var presenceReportResource = require('./../../app/js/common/resources/presenceReport.resource.js');
var presenceReportService = require('./../../app/js/common/services/presenceReport.service.js');

describe('Service: PresenceReport', function() {
  var service;
  var $httpBackend;
  var presenceReports = [{id: 1,
                        day: '2017-05-09',
                        group_id: 1,
                        student: {id: 1,
                                  first_name: 'Petro',
                                  last_name: 'Winston'},
                        report_times: [{id: 1,
                                  start_time: '11:11',
                                  end_time: '11:11',
                                  reportable_id: 1,
                                  reportable_type: 'PresenceReport'}]},
                       {id: 2,
                        day: '2000-02-03',
                        group_id: 1,
                        student: {id: 2,
                                  first_name: 'Ivan',
                                  last_name: 'Cammel'}}];
  var presenceReport = {id: 3,
                        day: '2000-02-04',
                        group_id: 1,
                        student: {id: 1,
                                  first_name: 'Max',
                                  last_name: 'Cummings'}};
  var reportTime = {id: 12,
                start_time: '11:11',
                end_time: '11:11',
                reportable_id: 3,
                reportable_type: 'PresenceReport'};

  beforeEach(angular.mock.module(vendorModule.name,
                                 constantsModule.name,
                                 valuesModule.name,
                                 presenceReportService.name));
  beforeEach(inject(function($injector) {
    service = $injector.get('presenceReportService');
    $httpBackend = $injector.get('$httpBackend');
    values = $injector.get('globalSettings');
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

  it('should return all presence reports', function() {

    var today = new Date;
    t = today.setHours(0, 0, 0, 0);
    $httpBackend.whenGET('http://localhost:3000/v1/presence_reports.json?day='+t+'&group_id=0')
    .respond(200, presenceReports);

    var response;
    service.getPresenceReports().then(function(Reports) {
     console.log(Reports)
     response=Reports
    }, function(data) {});

    $httpBackend.flush();

    expect(JSON.stringify(response)).toEqual(JSON.stringify(presenceReports));
  });

});



