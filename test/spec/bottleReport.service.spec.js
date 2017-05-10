<<<<<<< 830abdfadbc27494806e306ed6b21698c939cc08
<<<<<<< 78cc606e23ca9236ad1c001671c581f64c62f056
=======
>>>>>>> LVRUBYM-221:Added tests for service
var vendorModule = require('./../../app/js/requirements.js');
var constantsModule = require('./../../app/js/common/constants.js');
var valuesModule = require('./../../app/js/common/values.js');
var bottleResource = require('./../../app/js/common/resources/bottle.resource.js');
var bottleReportResource = require('./../../app/js/common/resources/bottleReport.resource.js');
var bottleReportService = require('./../../app/js/common/services/bottleReport.service.js');
<<<<<<< 830abdfadbc27494806e306ed6b21698c939cc08

describe('Service: BottleReport', function() {
  var service;
  var $httpBackend;

  var student = {id: 1,
                first_name: 'Annabel',
                last_name: 'Cummings'};

  var bottleReport = {id: 131,
                      day: '2017-05-08',
                      group_id: 1,
                      student: student,
                      bottles: [bottle]};

  var bottle = {id: 122,
                quantity: 75,
                time: '08:10',
                uom: 'ml',
                bottle_report_id: 131};

  var bottleReports = [bottleReport];

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

<<<<<<< 4d2e088911569f28dbc8ad1c75137c5f102ce51b
  it('addBottle function should be defined', function() {
    expect(service.addBottle).toBeDefined();
  });

  it('updateBottle function should be defined', function() {
    expect(service.updateBottle).toBeDefined();
  });

  it('deleteBottle function should be defined', function() {
    expect(service.deleteBottle).toBeDefined();
  });

  it('getBottleReports function should be defined', function() {
=======
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
>>>>>>> LVRUBYM-221:Added success and error function; fixed tests; changed css style and template
    expect(service.getBottleReports).toBeDefined();
  });

  it('is should return all bottle reports', function() {
    $httpBackend.whenGET('http://localhost:3000/v1/bottle_reports.json?group_id=0')
    .respond(bottleReports);
    var response;
    service.getBottleReports().then(function(bReports) {
      response = bReports;
    });

    $httpBackend.flush();

    expect(JSON.stringify(response)).toEqual(JSON.stringify(bottleReports));
  });

  it('is should updated bottle', function() {
    $httpBackend.whenPUT('http://localhost:3000/v1/bottle_reports/' +
      bottleReport.id + '/bottles/' + bottle.id + '.json').respond(bottle);
    var response;
    service.updateBottle(bottle, bottleReport).then(function(updatedBottle) {
      response = updatedBottle;
    });

    $httpBackend.flush();

    expect(JSON.stringify(response)).toEqual(JSON.stringify(bottle));
  });

  it('is should create new bottle', function() {
    $httpBackend.whenPOST('http://localhost:3000/v1/bottle_reports/' +
      bottleReport.id + '/bottles.json').respond(bottle);
    var response;
    service.addBottle(bottleReport).then(function(newBottle) {
      response = newBottle;
    });

    $httpBackend.flush();

    expect(JSON.stringify(response)).toEqual(JSON.stringify(bottle));
  });
=======
var bottleReportService = require('./../../common/services/bottle_report.service');
var vendorModule = require('./requirements.js');
=======
>>>>>>> LVRUBYM-221:Added tests for service

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

<<<<<<< 830abdfadbc27494806e306ed6b21698c939cc08
>>>>>>> LVRUBYM-221:Fixed file's name
});
=======
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
>>>>>>> LVRUBYM-221:Added tests for service
