module.exports = angular
  .module('constants', [])
  .constant('globalSettings', {
    SERVER_URL: 'http://localhost:3000',
    SERVER_URL_V1: 'http://localhost:3000/v1',
    MAIN_STATE: 'main.presenceReport',
    LOGIN_STATE: 'login',
    STUDENT_IMG: './app/img/student.png'
  })
  .constant('errorMessages', {
    NO_AUTH: 'Invalid Email/Password',
    AUTH_TIMEOUT: 'Session has expired',
    FAIL_RESPONSE: 'Oops! Something went wrong!Please, try again later!'
  })
  .constant('menuItems', [
      {name: 'Teacher report',  link: '#', submenu: [
        {name: 'Presence',          link: 'main.presenceReport'},
        {name: 'Diet',              link: 'main.healthReport'},
        {name: 'Bottle',            link: 'main.bottleReport'},
        {name: 'Meals',             link: '#'},
        {name: 'Potty',             link: '#'},
        {name: 'Nap',               link: 'main.static'},
        {name: 'Rewards',           link: '#'},
        {name: 'Personal notes',    link: 'main.myDayReport'},
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
