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
    AUTH_TIMEOUT: 'Session has expired'
  });
