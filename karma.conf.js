// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html
const path = require('path');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular/cli'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('karma-istanbul-threshold'),
      require('@angular/cli/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    files: [
      {pattern: './src/test.ts', watched: false},
      { pattern: './node_modules/@angular/material/prebuilt-themes/indigo-pink.css' }
    ],
    preprocessors: {
      './src/test.ts': ['@angular/cli']
    },
    mime: {
      'text/x-typescript': ['ts', 'tsx']
    },
    coverageIstanbulReporter: {
      reports: ['html', 'json', 'lcovonly'],
      fixWebpackSourcePaths: true
    },
    istanbulThresholdReporter: {
      src: 'coverage/coverage-final.json',
      basePath: path.resolve(__dirname, 'src'),
      reporters: ['text'],
      excludes: [
        'app/models/*.ts',
        'app/mocks/*.ts',
        'config/*.ts',
        'data/*.ts',
        'polyfills/*.ts'
      ],
      thresholds: {
        global: {
          statements: 75,
          branches: 70,
          lines: 70,
          functions: 70
        },
        each: {
          statements: 40,
          branches: 40,
          lines: 40,
          functions: 40
        }
      }
    },
    angularCli: {
      environment: 'dev'
    },
    reporters: config.angularCli && config.angularCli.codeCoverage
      ? ['progress', 'coverage-istanbul', 'istanbul-threshold']
      : ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};
