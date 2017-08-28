exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['../spec/angular-smoke-spec.js'],
  capabilities: {
    browserName: 'chrome'
  }
}
