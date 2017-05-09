var vendorModule = require('./../../app/js/requirements.js');
var constantsModule = require('./../../app/js/common/constants.js');
var valuesModule = require('./../../app/js/common/values.js');
var bottleResource = require('./../../app/js/common/resources/bottle.resource.js');
var bottleReportResource = require('./../../app/js/common/resources/bottleReport.resource.js');
var bottleReportService = require('./../../app/js/common/services/bottleReport.service.js');

describe('Service: BottleReport', function() {
  var service, $httpBackend;

  var bottleReports = [{ id: 131,
                     day: "2017-05-08",
                     group_id: 1,
                     student: {
                     id: 1,
                     first_name: "Annabel",
                     last_name: "Cummings" },
                     bottles: [{ id: 122,
                                 quantity: 75,
                                 time: "08:10",
                                 uom: "ml",
                                 bottle_report_id: 131}] },
                   { id: 132,
                     day: "2017-05-08",
                     group_id: 1,
                     student: {
                     id: 2,
                     first_name: "Anna",
                     last_name: "Cammel" } }
                  ];
  var bottleReport = { id: 131,
                     day: "2017-05-08",
                     group_id: 1,
                     student: {
                     id: 1,
                     first_name: "Annabel",
                     last_name: "Cummings" } };

  var bottle = { id: 122,
              quantity: 75,
              time: "08:10",
              uom: "ml",
              bottle_report_id: 131 };

  beforeEach(angular.mock.module(vendorModule.name,
                                 constantsModule.name,
                                 valuesModule.name,
                                 bottleReportService.name));
  
  beforeEach(inject(function($injector) {
    service = $injector.get('bottleReportService');
    $httpBackend = $injector.get('$httpBackend');
  }));
 
  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
   });

  it('is define', function() {
    expect(service.addBottle).toBeDefined();
  });

  it('is define', function() {
    expect(service.updateBottle).toBeDefined();
  });

  it('is define', function() {
    expect(service.deleteBottle).toBeDefined();
  });

  it('is define', function() {
    expect(service.getBottleReports).toBeDefined();
  });

  it('is should return all bottle reports', function() {
    $httpBackend.whenGET('http://localhost:3000/v1/bottle_reports.json?group_id=0').respond(bottleReports);
    var response;
    service.getBottleReports().then(function(bReports) {
       response = bReports;
     });
    $httpBackend.flush();
    expect(JSON.stringify(response)).toEqual(JSON.stringify(bottleReports));  
  });

  it('is should updated bottle', function() {
    $httpBackend.whenPUT('http://localhost:3000/v1/bottle_reports/' + bottleReport.id + '/bottles/' + bottle.id +'.json').respond(bottle);
    var response;
    service.updateBottle(bottle, bottleReport).then(function(updatedBottle) {
      response = updatedBottle;
    });
    $httpBackend.flush();
    expect(JSON.stringify(response)).toEqual(JSON.stringify(bottle));
  });

  it('is should create new bottle', function() {
    $httpBackend.whenPOST('http://localhost:3000/v1/bottle_reports/' + bottleReport.id + '/bottles.json').respond(bottle);
    var response;
    service.addBottle(bottleReport).then(function(newBottle) {
      response = newBottle;
    });
    $httpBackend.flush();
    expect(JSON.stringify(response)).toEqual(JSON.stringify(bottle));
  });
});