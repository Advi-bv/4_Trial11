const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://www.google.com',
      show: true,
      windowSize: '1200x900'
    }
  },
  include: {
    I: './steps_file.js'
  },
  name: 'Trial11'
}
mocha:{
  repoterOptions:{
    mochaFile:"Output/results.xml"
    reportDir:"Output"
  }
}
stepByStepReport:{
  enabled:true
  deleteSuccessful:false
 screenshotsForAllureReport: true
  deleteSuccessful:false
  
}
allure:{
  enabled:true
 
}
