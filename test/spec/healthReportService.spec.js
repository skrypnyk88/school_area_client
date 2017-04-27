describe('Unit: Testing Services', function() {
  describe('healthReportService:', function() {

    beforeEach(function() {
        angular.module('main');
    });

    it('should contain a healthReportService',
       inject(function(healthReport) {
            expect(healthReport).not.to.equal(null);
    }));

    // it('should contain two search options',
    //     inject(function(searchService) {
    //         expect(searchService.getSearchOptions()).to.equal(2);
    // }));
   });
});
