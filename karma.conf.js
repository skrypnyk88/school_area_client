module.exports = function(config) {
  config.set({
    basePath: 'app/js/',
    frameworks: ['angular', 'jasmine'],
    files: [
      './specs.webpack.js'
    ],

    reporters: ['progress', 'coverage'],
    preprocessors: {
      './specs.webpack.js': ['webpack', 'coverage']
    },

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    concurrency: Infinity,
    failOnEmptyTestSuite: false
  });
};
