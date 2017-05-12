module.exports = angular
  .module('constants', [])
  .constant('globalSettings', {
    SERVER_URL: 'http://localhost:3000',
    SERVER_URL_V1: 'http://localhost:3000/v1',
    MAIN_STATE: 'main.presenceReport',
    LOGIN_STATE: 'login'
  })
  .constant('errorMessages', {
    NO_AUTH: 'Invalid Email/Password',
    AUTH_TIMEOUT: 'Session has expired',
    FAIL_RESPONSE: 'Oops! Something went wrong!Please, try again later!'
  })
  .constant('menuItems', [
      {name: 'Teacher report',  link: '#', submenu: [
        {name: 'Presence',          link: 'main.presenceReport'},
        {name: 'Diet',              link: '#'},
        {name: 'Bottle',            link: '#'},
        {name: 'Meals',             link: '#'},
        {name: 'Potty',             link: '#'},
        {name: 'Nap',               link: '#'},
        {name: 'Rewards',           link: '#'},
        {name: 'Personal notes',    link: '#'},
        {name: 'Class notes',       link: '#'}
      ]},
      {name: 'Parens Sharing',  link: '#'},
      {name: 'Messages',        link: '#'},
      {name: 'Notifications',   link: '#'},
      {name: 'Calendar',        link: '#'},
      {name: 'Photo Gallery',   link: '#'},
      {name: 'Rewards',         link: '#'},
      {name: 'Contacts',        link: '#'}
    ]
  );
