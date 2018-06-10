module.exports = (config) => {
  config.set({
    // ... normal karma configuration
    frameworks: ['jasmine'],

    plugins: [
      'karma-jasmine',
      'karma-webpack',
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
    ],

    files: [
      'tests.webpack.js'
      // all files ending in "_test"
      // { pattern: '*.test.js', watched: false },
      // { pattern: '**/*.test.js', watched: false }
      // each file acts as entry point for the webpack configuration
    ],

    // exclude: [
    //   'node_modules/**/*.js'
    // ],

    preprocessors: {
      'tests.webpack.js': ['webpack']
      // add webpack as preprocessor
      // 'src/index.js': [ 'webpack' ],
      // '**/*.test.js': [ 'webpack' ]
    },

    webpackMiddleware: {
      noInfo: true
    },
    

    webpack: {},
    
    autoWatch: true,
    browsers: ['Chrome'],
    // browsers: ['Chrome'],
    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i. e.
      stats: 'errors-only'
    }



  })
}