module.exports = angular
  .module('values', [])
  .value('currentGroupDay', {
    group_id: 0,
    day: new Date().toISOString().slice(0, 10).replace(/-/g, '')
  })
  .value('currentUser', {
    id: '',
    first_name: '',
    last_name: '',
    locale: '',
    url: '',
    phone: '',
    email: ''
  });
