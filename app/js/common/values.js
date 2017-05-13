module.exports = angular
  .module('values', [])
  .value('currentGroupDay', {
    group_id: 0,
    day: new Date()
  })
  .value('currentUser', {
    id: '',
    first_name: '',
    last_name: '',
    locale: 'en',
    url: '',
    phone: '',
    email: ''
  });
