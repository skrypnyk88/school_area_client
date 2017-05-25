var napReportService = require('./../../app/js/common/services/napReport.service.js');
var requirements = require('./../../app/js/requirements.js');
var values = require('./../../app/js/common/values.js');
var constants = require('./../../app/js/common/constants.js');
var toggle = require('./../../app/js/common/services/toggleMessage/toggleMessage.service.js');

describe('Nap Report Test', function() {
  var service;
  var $httpBackend;

  var student = {id: 1,
                first_name: 'Misha',
                last_name: 'Shtogryn'};

  var napReport = {id: 1,
                  day: '2017-05-08',
                  group_id: 1,
                  student: student,
                  report_times: [reportTime]};

  var reportTime = {id: 1,
                start_time: '11:11',
                end_time: '22:22',
                reportable_id: 1};

  var napReports = [napReport];

  var errors = {errors: ['Error message']};

  beforeEach(angular.mock.module(requirements.name,
                                 napReportService.name,
                                 values.name,
                                 toggle.name,
                                 constants.name));

  beforeEach(inject(function($injector) {
    service = $injector.get('napReportService');
    $httpBackend = $injector.get('$httpBackend');
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('is define getNapReports', function() {
    expect(service.getNapReports).toBeDefined();
  });

  it('is define addReportTime', function() {
    expect(service.addReportTime).toBeDefined();
  });

  it('is define deleteReportTime', function() {
    expect(service.deleteReportTime).toBeDefined();
  });

  it('is define updateReportTime', function() {
    expect(service.updateReportTime).toBeDefined();
  });

  it('is define updateEndTime', function() {
    expect(service.updateEndTime).toBeDefined();
  });

  it('is should return all presence reports', inject(function(toggleMessage,
                                                              globalSettings,
                                                              currentGroupDay) {
    $httpBackend.whenGET(globalSettings.SERVER_URL_V1 + '/nap_reports.json?group_id=' +
                         currentGroupDay.group_id).respond(200, napReports);
    var response;
    spyOn(toggleMessage, 'showMessages');
    service.getNapReports().then(function(Reports) {
      response = Reports;
    });

    $httpBackend.flush();

    expect(JSON.stringify(response)).toEqual(JSON.stringify(napReports));
  }));

  it('is should updated report Time', inject(function(toggleMessage, globalSettings) {
    $httpBackend.whenPUT(globalSettings.SERVER_URL_V1 + '/nap_reports/' +
      napReport.id + '/report_times/' + reportTime.id + '.json').respond(200, reportTime);
    var response;
    service.updateReportTime(reportTime, napReport).then(function(updatedReport) {
      response = updatedReport;
    });

    $httpBackend.flush();

    expect(JSON.stringify(response)).toEqual(JSON.stringify(reportTime));
  }));

  it('error message updated report Time', inject(function(toggleMessage, globalSettings) {
    $httpBackend.whenPUT(globalSettings.SERVER_URL_V1 + '/nap_reports/' +
      napReport.id + '/report_times/' + reportTime.id + '.json').respond(400, errors);
    var response;
    spyOn(toggleMessage, 'returnDataErrors');
    service.updateReportTime(reportTime, napReport).then(function(updatedReport) {
      response = updatedReport;
    });

    $httpBackend.flush();

    expect(JSON.stringify(response)).toEqual(JSON.stringify(errors));
  }));

  it('is should updated end report Time', inject(function(toggleMessage, globalSettings) {
    $httpBackend.whenPUT(globalSettings.SERVER_URL_V1 + '/nap_reports/' +
      napReport.id + '/report_times/' + reportTime.id + '.json').respond(200, reportTime);
    var response;
    service.updateEndTime(reportTime, napReport).then(function(updatedReport) {
      response = updatedReport;
    });

    $httpBackend.flush();

    expect(JSON.stringify(response)).toEqual(JSON.stringify(reportTime));
  }));

  it('error message updated end report Time', inject(function(toggleMessage, globalSettings) {
    $httpBackend.whenPUT(globalSettings.SERVER_URL_V1 + '/nap_reports/' +
      napReport.id + '/report_times/' + reportTime.id + '.json').respond(400, errors);
    var response;
    spyOn(toggleMessage, 'returnDataErrors');
    service.updateEndTime(reportTime, napReport).then(function(updatedReport) {
      response = updatedReport;
    });

    $httpBackend.flush();

    expect(JSON.stringify(response)).toEqual(JSON.stringify(errors));
  }));

  it('is should create new report Time', inject(function(toggleMessage, globalSettings) {
    $httpBackend.whenPOST(globalSettings.SERVER_URL_V1 + '/nap_reports/' +
      napReport.id + '/report_times.json').respond(200, reportTime);
    var response;
    service.addReportTime(napReport).then(function(newReport) {
      response = newReport;
    });

    $httpBackend.flush();

    expect(JSON.stringify(response)).toEqual(JSON.stringify(reportTime));
  }));

  it('error message add report Time', inject(function(toggleMessage, globalSettings) {
    $httpBackend.whenPOST(globalSettings.SERVER_URL_V1 + '/nap_reports/' +
      napReport.id + '/report_times.json').respond(400, errors);
    var response;
    spyOn(toggleMessage, 'returnDataErrors');
    service.addReportTime(napReport).then(function(postReport) {
      response = postReport;
    });

    $httpBackend.flush();

    expect(JSON.stringify(response)).toEqual(JSON.stringify(errors));
  }));
});
