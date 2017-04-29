module.exports = angular
.module('bottleReport.resource', [])
.factory('bottleReportResource', bottleReportResource);

bottleReportResource.$inject = ['$resource', 'globalSettings', 'currentGroupDay'];

<<<<<<< 78cc606e23ca9236ad1c001671c581f64c62f056
function bottleReportResource($resource, globalSettings) {
  return $resource(globalSettings.SERVER_URL_V1 + '/bottle_reports.json');
};
=======
function bottleReportResource($resource, globalSettings, currentGroupDay) {
  return $resource(globalSettings.SERVER_URL_V1 + '/v1/bottle_reports.json',
  {group_id: currentGroupDay.group_id});
}
>>>>>>> LVRUBYM-221:Fixed file's name
