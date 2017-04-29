var bottleReportService = require('./../../common/services/bottle_report.service');
var vendorModule = require('./requirements.js');

discribe("Service: BottleReport" function(){
  var service, $httpBackend;

  beforeEach(angular.moch.module(bottleReportService.name, vendorModule.name));

  beforeEach(inject(function($injector){
    service = $injector.get('bottleReportService');
    $httpBackend = $injector.get('$httpBackend');
    $httpBackend.whenGET('')
  }));

  afterEach(function(){
    $httpBackend.verifyNoOutStandingExpectation;
    $httpBackend.verifyNoOutStandingRequest;
  });

  it('is defined', function(){
    expect(service.getBottleReports).toBeDefined();
  });

});
