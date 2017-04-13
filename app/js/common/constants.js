module.exports = angular
  .module('constants', [])
<<<<<<< 0e564eaf0f8c3be0d4bc98c5b395fcc4a37d754e
  .constant('globalSettings', {
    SERVER_URL: 'http://localhost:3000',
    SERVER_URL_V1: 'http://localhost:3000/v1',
    MAIN_STATE: 'main.presenceReport',
    LOGIN_STATE: 'login'
  })
  .constant('errorMessages', {
    NO_AUTH: 'Invalid Email/Password',
    AUTH_TIMEOUT: 'Session has expired'
=======
  .constant('constants', {
    serverUrl: 'http://localhost:3000',
    serverUrlV1: 'http://localhost:3000/v1',
>>>>>>> LVRUBYM-220: Add common folder
  });
