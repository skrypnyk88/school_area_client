var vendor = require('./../../app/js/requirements.js');
var ourDayReport = require('./../../app/js/common/services/ourDayReport.service.js');
var constantsModule = require('./../../app/js/common/constants.js');
var valuesModule = require('./../../app/js/common/values.js');
var toggle = require('./../../app/js/common/services/toggleMessage/toggleMessage.service.js');

describe('OurDay Report Test', function() {
  var service;
  var $httpBackend;

  var group = {id: 1, name: 'Group_1'};

  var report = {group_id: 1,
                day: Date.today,
                our_day: {description: description}};

  var description = 'Some description';

  var errors = {errors: ['Error message']};

  beforeEach(angular.mock.module(vendor.name,
                                 ourDayReport.name,
                                 constantsModule.name,
                                 valuesModule.name,
                                 toggle.name
                                 ));

  beforeEach(inject(function($injector) {
    service = $injector.get('OurDayReportService');
    $httpBackend = $injector.get('$httpBackend');
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('#getReport is defined', function() {
    expect(service.getReport).toBeDefined();
  });

  it('#updateReport is define', function() {
    expect(service.updateReport).toBeDefined();
  });

  it('is should return report', inject(function(toggleMessage,
                                                globalSettings,
                                                currentGroupDay) {

    $httpBackend.whenGET(globalSettings.SERVER_URL_V1 + '/our_day.json?group_id=' +
      currentGroupDay.group_id + '&day=' + currentGroupDay.day).respond(200, report);

    var response;
    spyOn(toggleMessage, 'showMessages');
    service.getReport().then(function(Report) {
      response = Report;
    });

    $httpBackend.flush();

    expect(JSON.stringify(response)).toEqual(JSON.stringify(report));
  }));

  it('when updated report', inject(function(toggleMessage,
                                            globalSettings,
                                            currentGroupDay) {

    $httpBackend.whenPUT(globalSettings.SERVER_URL_V1 + '/our_day.json').respond(200, report);

    var response;

    spyOn(toggleMessage, 'showMessages');
    service.updateReport(description).then(function(updatedReport) {
      response = updatedReport;
    });

    $httpBackend.flush();

    expect(JSON.stringify(response)).toEqual(JSON.stringify(report));
  }));

  it('it can return error message when updated report', inject(function(toggleMessage,
                                                                        globalSettings,
                                                                        currentGroupDay) {

    $httpBackend.whenPUT(globalSettings.SERVER_URL_V1 + '/our_day.json').respond(400, errors);

    var response;

    spyOn(toggleMessage, 'returnDataErrors');
    service.updateReport(description).then(function(updatedReport) {
      response = updatedReport;
    });

    $httpBackend.flush();

    expect(JSON.stringify(response)).toEqual(JSON.stringify(errors));
  }));
});
