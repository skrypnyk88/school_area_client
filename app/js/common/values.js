module.exports = angular
  .module('values', [])
  .value('currentGroupDay', {
    group_id: 0,
    day: new Date()
  })
  .value('currentUserValues', {
    first_name: '',
    last_name: '',
    locale: 'en'
  });
