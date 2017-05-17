module.exports = angular
  .module('schoolArea.vendor', [
    require('angular-ui-router'),
    require('angular-resource'),
    require('angular-messages'),
    require('angular-local-storage'),
    require('angular-material'),
    require('angular-base64-upload'),
    'pascalprecht.translate',
    require('angular-translate'),
    require('angular-translate-loader-static-files')
    ]);
