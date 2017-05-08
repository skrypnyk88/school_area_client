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
<<<<<<< HEAD
    AUTH_TIMEOUT: 'Session has expired',
<<<<<<< 16a7a21a21fa4e6b69535f96494473fefcbeeacf
<<<<<<< b1263744d5dbac2df9f7478c666c2beb7b7604de
    FAIL_RESPONSE: 'Oops! Something went wrong!Please, try again later!'
  })
  .constant('menuItems', [
      {name: 'Teacher report',  link: '#', submenu: [
        {name: 'Presence',          link: 'main.presenceReport'},
        {name: 'Diet',              link: '#'},
        {name: 'Bottle',            link: 'main.bottleReport'},
        {name: 'Meals',             link: '#'},
        {name: 'Potty',             link: '#'},
        {name: 'Nap',               link: 'main.static'},
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
=======
    FAIL_RESPONSE: 'Oops! Something went wrong! Please, try again later!'
=======
    FAIL_RESPONSE: 'Oops! Something went wrong!Please, try again later!'
>>>>>>> LVRUBYM-221:Changed fail response
  });
<<<<<<< 4ac0622ae5f72bcd5cc1cb348264d9c657b9d123
>>>>>>> LVRUBYM-221:Added validation and failure response
=======
=======
    AUTH_TIMEOUT: 'Session has expired'
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
>>>>>>> LVRUBYM-344: Create main template style
>>>>>>> LVRUBYM-344: Create main template style
