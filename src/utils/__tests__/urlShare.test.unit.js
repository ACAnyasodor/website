import UrlShare from '../urlShare'

describe('UrlShare', () => {
  it('returns an error', () => {
    const urlShare = new UrlShare('invalid (not an object)')
    urlShare.start()
    expect(urlShare.isValid()).toBe('object expected')
  })
  it('returns an error for coordinates field with a wrong type', () => {
    const urlShare = new UrlShare({ ...shareObject, coordinates: 'test' })
    urlShare.start()
    expect(urlShare.isValid()).toBe('coordinates: array expected')
  })
  it('returns an error for filter field with a wrong type', () => {
    const urlShare = new UrlShare({ ...shareObject, filter: true })
    urlShare.start()
    expect(urlShare.isValid()).toBe('filter: object expected')
  })
  it('returns an error for sortBy field with a wrong type', () => {
    const urlShare = new UrlShare({ ...shareObject, sortBy: true })
    urlShare.start()
    expect(urlShare.isValid()).toBe('sortBy: string expected')
  })
  it('returns a valid object', () => {
    const urlShare = new UrlShare({ ...shareObject })
    urlShare.start()
    if (urlShare.isValid()) {
      const message = urlShare.toValidObject()
      const encodedMessage = urlShare.encode(message)
      const result = urlShare.decode(encodedMessage)
      /*expect(message).toEqual({
        coordinates: { '0': { type: 'npm', provider: 'npmjs', name: 'async', revision: '0.2.10' } },
        filter: '{}',
        sortBy: 'test'
      })*/
    }
  })
})

const shareObject = {
  filter: {},
  sortBy: 'name',
  coordinates: [
    { type: 'npm', provider: 'npmjs', name: 'async', revision: '0.2.10', changes: { 'licensed.declared': '' } },
    { type: 'npm', provider: 'npmjs', name: '7zip-standalone', revision: '0.0.2' },
    { type: 'npm', provider: 'npmjs', name: 'accessibility-developer-tools', revision: '2.12.0' },
    { type: 'npm', provider: 'npmjs', name: 'accounting', revision: '0.4.1' },
    { type: 'npm', provider: 'npmjs', name: 'acorn', revision: '0.9.0' },
    { type: 'npm', provider: 'npmjs', name: 'acorn', revision: '0.8.0' },
    { type: 'npm', provider: 'npmjs', name: 'adm-zip', revision: '0.4.8' },
    { type: 'npm', provider: 'npmjs', name: 'adm-zip', revision: '0.4.9' },
    { type: 'npm', provider: 'npmjs', name: 'adm-zip', revision: '0.4.11' },
    { type: 'npm', provider: 'npmjs', name: 'adm-zip', revision: '0.4.7' },
    { type: 'npm', provider: 'npmjs', name: 'adm-zip', revision: '0.4.4' },
    { type: 'npm', provider: 'npmjs', name: 'admin-lte', revision: '2.4.8' },
    { type: 'npm', provider: 'npmjs', name: 'admin-lte', revision: '2.3.3' },
    { type: 'npm', provider: 'npmjs', name: 'admin-lte', revision: '2.3.11' },
    { type: 'npm', provider: 'npmjs', name: 'anchor', revision: '0.10.5' },
    { type: 'npm', provider: 'npmjs', name: 'angular-audio', revision: '1.7.3' },
    { type: 'npm', provider: 'npmjs', name: 'angular-ui-notification', revision: '0.2.0' },
    { type: 'npm', provider: 'npmjs', name: 'angular-ui-router', revision: '0.2.13' },
    { type: 'npm', provider: 'npmjs', name: 'angular-ui-router', revision: '0.2.11' },
    { type: 'npm', provider: 'npmjs', name: 'angular2-tooltip', revision: '3.1.0' },
    { type: 'npm', provider: 'npmjs', name: 'angularjs-datatables', revision: '0.5.9' },
    { type: 'npm', provider: 'npmjs', name: 'annotator', revision: '2.0.0-alpha.3' },
    { type: 'npm', provider: 'npmjs', name: 'app-builder-lib', revision: '20.29.0' },
    { type: 'npm', provider: 'npmjs', name: 'app-builder-lib', revision: '20.24.5' },
    { type: 'npm', provider: 'npmjs', name: 'app-builder-lib', revision: '20.25.0' },
    { type: 'npm', provider: 'npmjs', name: 'app-builder-lib', revision: '20.38.5' },
    { type: 'npm', provider: 'npmjs', name: 'app-builder-lib', revision: '20.27.1' },
    { type: 'npm', provider: 'npmjs', name: 'app-builder-lib', revision: '20.28.4' },
    { type: 'npm', provider: 'npmjs', name: 'app-builder-lib', revision: '20.28.2' },
    { type: 'npm', provider: 'npmjs', name: 'app-builder-lib', revision: '20.26.0' },
    { type: 'npm', provider: 'npmjs', name: 'astros', revision: '1.0.0' },
    { type: 'npm', provider: 'npmjs', name: 'backbone', revision: '0.5.3' },
    { type: 'npm', provider: 'npmjs', name: 'backbone', revision: '0.9.2' },
    { type: 'npm', provider: 'npmjs', name: 'backgrid-filter', revision: '0.3.7' },
    { type: 'npm', provider: 'npmjs', name: 'backgrid-select-all', revision: '0.3.5' },
    { type: 'crate', provider: 'cratesio', name: 'backtrace-sys', revision: '0.1.16' },
    { type: 'npm', provider: 'npmjs', name: 'base62', revision: '1.2.7' },
    { type: 'npm', provider: 'npmjs', name: 'basic-authentication', revision: '1.9.0' },
    { type: 'npm', provider: 'npmjs', name: 'bigtext', revision: '0.1.8' },
    { type: 'npm', provider: 'npmjs', name: 'binpacking', revision: '0.0.1' },
    {
      type: 'git',
      provider: 'github',
      namespace: 'bither',
      name: 'bither-android-lib',
      revision: '845b6e03e9d04c7d2c360b1c7d16e495d870ec9a'
    },
    { type: 'npm', provider: 'npmjs', name: 'blanket', revision: '1.1.6' },
    { type: 'npm', provider: 'npmjs', name: 'blockui', revision: '1.0.0' },
    { type: 'npm', provider: 'npmjs', name: 'bootflat', revision: '2.0.4' },
    { type: 'npm', provider: 'npmjs', name: 'bootstrap', revision: '3.1.1' },
    {
      type: 'git',
      provider: 'github',
      namespace: 'twbs',
      name: 'bootstrap',
      revision: 'bcf7dd38b5ab180256e2e4fb5da0369551b3f082'
    },
    { type: 'npm', provider: 'npmjs', name: 'bootstrap', revision: '3.3.0' },
    { type: 'npm', provider: 'npmjs', name: 'bootstrap', revision: '3.3.1' },
    {
      type: 'git',
      provider: 'github',
      namespace: 'twbs',
      name: 'bootstrap',
      revision: 'e8a1df5f060bf7e6631554648e0abde150aedbe4'
    },
    {
      type: 'git',
      provider: 'github',
      namespace: 'twbs',
      name: 'bootstrap',
      revision: '16b48259a62f576e52c903c476bd42b90ab22482'
    },
    { type: 'npm', provider: 'npmjs', name: 'bootstrap', revision: '3.3.2' },
    { type: 'npm', provider: 'npmjs', name: 'bootstrap', revision: '3.2.0' },
    { type: 'npm', provider: 'npmjs', name: 'bootstrap-datepicker', revision: '1.4.0' },
    { type: 'npm', provider: 'npmjs', name: 'bootstrap-datepicker', revision: '1.6.4' },
    { type: 'npm', provider: 'npmjs', name: 'bootstrap-table', revision: '1.11.0' },
    { type: 'npm', provider: 'npmjs', name: 'bootstrap-validator', revision: '0.11.9' },
    { type: 'npm', provider: 'npmjs', name: 'bower', revision: '1.8.0' },
    { type: 'npm', provider: 'npmjs', name: 'bower', revision: '1.8.2' },
    { type: 'npm', provider: 'npmjs', name: 'bower', revision: '1.7.9' },
    { type: 'npm', provider: 'npmjs', name: 'bower', revision: '1.7.10' },
    { type: 'npm', provider: 'npmjs', name: 'bower', revision: '1.8.8' },
    { type: 'npm', provider: 'npmjs', name: 'bower', revision: '1.8.7' },
    { type: 'npm', provider: 'npmjs', name: 'bower', revision: '1.8.4' },
    { type: 'npm', provider: 'npmjs', name: 'browserstack-webdriver', revision: '2.41.1' },
    { type: 'npm', provider: 'npmjs', name: 'bundle-dependencies', revision: '1.0.2' },
    { type: 'npm', provider: 'npmjs', name: 'c3-angular', revision: '1.4.0' },
    { type: 'npm', provider: 'npmjs', name: 'c3-angular', revision: '1.0.1' },
    {
      type: 'git',
      provider: 'github',
      namespace: 'microsoft',
      name: 'chakracore',
      revision: '1f38e6bcb50aef003b46ab156de4baced5be5ac7'
    },
    { type: 'npm', provider: 'npmjs', name: 'chimp', revision: '0.41.2' },
    { type: 'npm', provider: 'npmjs', name: 'chrono-node', revision: '1.3.1' },
    { type: 'npm', provider: 'npmjs', name: 'chrono-node', revision: '1.2.5' },
    { type: 'npm', provider: 'npmjs', name: 'chrono-node', revision: '1.2.4' },
    { type: 'npm', provider: 'npmjs', name: 'chrono-node', revision: '1.2.3' },
    { type: 'npm', provider: 'npmjs', name: 'chrono-node', revision: '0.1.11' },
    { type: 'crate', provider: 'cratesio', name: 'clippy_lints', revision: '0.0.212' },
    { type: 'npm', provider: 'npmjs', name: 'closurecompiler', revision: '1.6.1' },
    { type: 'npm', provider: 'npmjs', name: 'codesandbox', revision: '1.3.8' },
    { type: 'npm', provider: 'npmjs', name: 'combine-mq', revision: '0.8.1' },
    { type: 'npm', provider: 'npmjs', name: 'config-extend', revision: '0.0.6' },
    { type: 'npm', provider: 'npmjs', name: 'cordova-android', revision: '6.3.0' },
    { type: 'npm', provider: 'npmjs', name: 'cordova-android', revision: '6.4.0' },
    { type: 'npm', provider: 'npmjs', name: 'cordova-android', revision: '6.2.3' },
    { type: 'npm', provider: 'npmjs', name: 'cordova-android', revision: '7.1.0' },
    { type: 'npm', provider: 'npmjs', name: 'cordova-android', revision: '7.0.0' },
    { type: 'npm', provider: 'npmjs', name: 'cordova-android', revision: '5.2.2' },
    { type: 'npm', provider: 'npmjs', name: 'cordova-android', revision: '6.2.1' },
    { type: 'npm', provider: 'npmjs', name: 'cordova-android', revision: '7.1.1' },
    { type: 'npm', provider: 'npmjs', name: 'cordova-browser', revision: '4.1.0' },
    { type: 'npm', provider: 'npmjs', name: 'cordova-ios', revision: '4.5.5' },
    { type: 'npm', provider: 'npmjs', name: 'cordova-ios', revision: '4.5.1' },
    { type: 'npm', provider: 'npmjs', name: 'cordova-ios', revision: '4.5.4' },
    { type: 'npm', provider: 'npmjs', name: 'cordova-ios', revision: '4.4.0' },
    { type: 'npm', provider: 'npmjs', name: 'cordova-ios', revision: '4.2.0' },
    { type: 'npm', provider: 'npmjs', name: 'cordova-plugin-mauron85-background-geolocation', revision: '2.3.5' },
    { type: 'npm', provider: 'npmjs', name: 'cordova-sqlite-storage', revision: '1.4.6' },
    { type: 'npm', provider: 'npmjs', name: 'cordova-sqlite-storage', revision: '1.4.8' },
    { type: 'npm', provider: 'npmjs', name: 'cordova-windows', revision: '6.0.0' },
    { type: 'npm', provider: 'npmjs', name: 'cordova-windows', revision: '4.4.3' },
    { type: 'npm', provider: 'npmjs', name: 'cordova-windows', revision: '4.4.2' },
    { type: 'npm', provider: 'npmjs', name: 'cordova-windows', revision: '5.0.0' },
    { type: 'npm', provider: 'npmjs', name: 'crypto-browserify', revision: '2.1.10' },
    { type: 'npm', provider: 'npmjs', name: 'cucumber', revision: '0.3.3' },
    { type: 'npm', provider: 'npmjs', name: 'cucumber', revision: '0.4.4' },
    { type: 'npm', provider: 'npmjs', name: 'dat.gui', revision: '0.7.2' },
    { type: 'npm', provider: 'npmjs', name: 'data', revision: '0.6.1' },
    { type: 'npm', provider: 'npmjs', name: 'dc', revision: '3.0.0' },
    { type: 'npm', provider: 'npmjs', name: 'dc', revision: '3.0.6' },
    { type: 'npm', provider: 'npmjs', name: 'dcjqaccordion', revision: '2.7.1' },
    { type: 'npm', provider: 'npmjs', name: 'dependency-cruiser', revision: '4.5.0' },
    { type: 'npm', provider: 'npmjs', name: 'derequire', revision: '1.2.1' },
    { type: 'npm', provider: 'npmjs', name: 'derequire', revision: '0.8.0' },
    { type: 'npm', provider: 'npmjs', name: 'dmg-builder', revision: '4.1.5' },
    { type: 'npm', provider: 'npmjs', name: 'dmg-builder', revision: '6.2.1' },
    { type: 'npm', provider: 'npmjs', name: 'dmg-builder', revision: '2.0.0' },
    { type: 'npm', provider: 'npmjs', name: 'dmg-builder', revision: '6.4.0' },
    { type: 'npm', provider: 'npmjs', name: 'dmg-builder', revision: '6.5.2' },
    { type: 'npm', provider: 'npmjs', name: 'dmg-builder', revision: '6.5.3' },
    { type: 'npm', provider: 'npmjs', name: 'dmg-builder', revision: '4.11.4' },
    { type: 'npm', provider: 'npmjs', name: 'dmg-builder', revision: '6.5.4' },
    { type: 'npm', provider: 'npmjs', name: 'dmg-builder', revision: '5.0.4' },
    { type: 'npm', provider: 'npmjs', name: 'dmg-builder', revision: '5.2.0' },
    { type: 'npm', provider: 'npmjs', name: 'dmg-builder', revision: '5.3.1' },
    { type: 'npm', provider: 'npmjs', name: 'dmg-builder', revision: '4.1.8' },
    { type: 'npm', provider: 'npmjs', name: 'dmg-builder', revision: '6.1.2' },
    { type: 'npm', provider: 'npmjs', name: 'dmg-builder', revision: '4.1.3' },
    { type: 'npm', provider: 'npmjs', name: 'dmg-builder', revision: '5.0.3' },
    { type: 'npm', provider: 'npmjs', name: 'dmg-builder', revision: '3.1.0' },
    { type: 'npm', provider: 'npmjs', name: 'dmg-builder', revision: '3.1.3' },
    { type: 'npm', provider: 'npmjs', name: 'dmg-builder', revision: '3.1.4' },
    { type: 'npm', provider: 'npmjs', name: 'dmg-builder', revision: '4.1.1' },
    { type: 'npm', provider: 'npmjs', name: 'dmg-builder', revision: '5.1.0' },
    { type: 'npm', provider: 'npmjs', name: 'dmg-builder', revision: '4.10.1' },
    { type: 'npm', provider: 'npmjs', name: 'dmg-builder', revision: '6.0.0' },
    { type: 'npm', provider: 'npmjs', name: 'dmg-builder', revision: '5.3.0' },
    { type: 'npm', provider: 'npmjs', name: 'dom-to-image', revision: '2.6.0' },
    { type: 'npm', provider: 'npmjs', name: 'domino', revision: '1.0.0' },
    { type: 'npm', provider: 'npmjs', name: 'dust', revision: '0.3.0' },
    { type: 'npm', provider: 'npmjs', name: 'dustjs-linkedin', revision: '2.0.3' },
    {
      type: 'git',
      provider: 'github',
      namespace: 'dynamods',
      name: 'dynamo',
      revision: '0a3a12c42ac1f255cb026afaf9503662bd913e09'
    },
    { type: 'npm', provider: 'npmjs', name: 'elasticlunr', revision: '0.9.5' },
    { type: 'npm', provider: 'npmjs', name: 'elasticlunr', revision: '0.8.8' },
    { type: 'npm', provider: 'npmjs', name: 'electron-builder', revision: '11.4.4' },
    { type: 'npm', provider: 'npmjs', name: 'electron-builder', revision: '19.28.1' },
    { type: 'npm', provider: 'npmjs', name: 'electron-builder', revision: '15.6.4' },
    { type: 'npm', provider: 'npmjs', name: 'electron-builder', revision: '16.8.4' },
    { type: 'npm', provider: 'npmjs', name: 'electron-builder', revision: '19.18.0' },
    { type: 'npm', provider: 'npmjs', name: 'electron-builder', revision: '11.7.0' },
    { type: 'npm', provider: 'npmjs', name: 'electron-builder-lib', revision: '20.11.1' },
    { type: 'npm', provider: 'npmjs', name: 'electron-builder-lib', revision: '20.8.2' },
    { type: 'npm', provider: 'npmjs', name: 'electron-builder-lib', revision: '20.17.2' },
    { type: 'npm', provider: 'npmjs', name: 'electron-builder-lib', revision: '20.15.1' },
    { type: 'npm', provider: 'npmjs', name: 'electron-builder-lib', revision: '20.13.3' },
    { type: 'npm', provider: 'npmjs', name: 'electron-builder-lib', revision: '20.14.7' },
    { type: 'npm', provider: 'npmjs', name: 'electron-builder-lib', revision: '20.8.1' },
    { type: 'npm', provider: 'npmjs', name: 'electron-builder-lib', revision: '19.56.2' },
    { type: 'npm', provider: 'npmjs', name: 'electron-builder-lib', revision: '20.2.1' },
    { type: 'npm', provider: 'npmjs', name: 'electron-builder-lib', revision: '20.6.2' },
    { type: 'npm', provider: 'npmjs', name: 'electron-builder-lib', revision: '20.23.1' },
    { type: 'npm', provider: 'npmjs', name: 'electron-builder-lib', revision: '20.4.0' },
    { type: 'npm', provider: 'npmjs', name: 'electron-builder-lib', revision: '19.52.1' },
    { type: 'npm', provider: 'npmjs', name: 'electron-builder-lib', revision: '19.55.3' },
    { type: 'npm', provider: 'npmjs', name: 'electron-builder-lib', revision: '20.18.0' },
    { type: 'npm', provider: 'npmjs', name: 'electron-builder-lib', revision: '20.9.2' },
    { type: 'npm', provider: 'npmjs', name: 'electron-builder-lib', revision: '20.10.0' },
    { type: 'npm', provider: 'npmjs', name: 'ember-auto-import', revision: '1.2.4' },
    { type: 'npm', provider: 'npmjs', name: 'ember-auto-import', revision: '1.2.5' },
    { type: 'npm', provider: 'npmjs', name: 'ember-cli', revision: '0.2.7' },
    { type: 'npm', provider: 'npmjs', name: 'ember-cli', revision: '0.1.15' },
    { type: 'npm', provider: 'npmjs', name: 'ember-cli', revision: '0.0.40' },
    { type: 'npm', provider: 'npmjs', name: 'ember-cli', revision: '1.13.8' },
    { type: 'npm', provider: 'npmjs', name: 'ember-cli', revision: '0.2.3' },
    { type: 'npm', provider: 'npmjs', name: 'ember-cli', revision: '0.0.44' },
    { type: 'npm', provider: 'npmjs', name: 'ember-cli-react', revision: '1.0.0' },
    { type: 'npm', provider: 'npmjs', name: 'ember-data', revision: '2.18.2' },
    { type: 'npm', provider: 'npmjs', name: 'ember-data', revision: '2.16.4' },
    { type: 'npm', provider: 'npmjs', name: 'ember-debug-handlers-polyfill', revision: '1.1.0' },
    { type: 'npm', provider: 'npmjs', name: 'es5-ext', revision: '0.10.35' },
    { type: 'npm', provider: 'npmjs', name: 'es5-ext', revision: '0.10.48' },
    { type: 'npm', provider: 'npmjs', name: 'es5-ext', revision: '0.10.31' },
    { type: 'npm', provider: 'npmjs', name: 'es5-ext', revision: '0.10.7' },
    { type: 'npm', provider: 'npmjs', name: 'es5-ext', revision: '0.10.14' },
    { type: 'npm', provider: 'npmjs', name: 'es5-ext', revision: '0.10.46' },
    { type: 'npm', provider: 'npmjs', name: 'es5-ext', revision: '0.10.15' },
    { type: 'npm', provider: 'npmjs', name: 'es5-ext', revision: '0.10.33' },
    { type: 'npm', provider: 'npmjs', name: 'es5-ext', revision: '0.10.43' },
    { type: 'npm', provider: 'npmjs', name: 'es5-ext', revision: '0.10.40' },
    { type: 'npm', provider: 'npmjs', name: 'es5-ext', revision: '0.10.42' },
    { type: 'npm', provider: 'npmjs', name: 'es5-ext', revision: '0.10.16' },
    { type: 'npm', provider: 'npmjs', name: 'es5-ext', revision: '0.10.41' },
    { type: 'npm', provider: 'npmjs', name: 'es5-ext', revision: '0.10.44' },
    { type: 'npm', provider: 'npmjs', name: 'es5-ext', revision: '0.10.38' },
    { type: 'npm', provider: 'npmjs', name: 'es5-ext', revision: '0.10.37' },
    { type: 'npm', provider: 'npmjs', name: 'es5-ext', revision: '0.10.47' },
    { type: 'npm', provider: 'npmjs', name: 'es5-ext', revision: '0.10.49' },
    { type: 'npm', provider: 'npmjs', name: 'es5-ext', revision: '0.10.30' },
    { type: 'npm', provider: 'npmjs', name: 'es5-ext', revision: '0.10.18' },
    { type: 'npm', provider: 'npmjs', name: 'es5-ext', revision: '0.10.29' },
    { type: 'npm', provider: 'npmjs', name: 'es5-ext', revision: '0.10.27' },
    { type: 'npm', provider: 'npmjs', name: 'es5-ext', revision: '0.10.8' },
    { type: 'npm', provider: 'npmjs', name: 'es5-ext', revision: '0.10.20' },
    { type: 'npm', provider: 'npmjs', name: 'es5-ext', revision: '0.10.21' },
    { type: 'npm', provider: 'npmjs', name: 'es5-ext', revision: '0.10.12' },
    { type: 'npm', provider: 'npmjs', name: 'es5-ext', revision: '0.10.45' },
    { type: 'npm', provider: 'npmjs', name: 'es5-ext', revision: '0.10.26' },
    { type: 'npm', provider: 'npmjs', name: 'es5-ext', revision: '0.10.24' },
    { type: 'npm', provider: 'npmjs', name: 'es5-ext', revision: '0.10.23' },
    { type: 'npm', provider: 'npmjs', name: 'es5-ext', revision: '0.10.22' },
    { type: 'npm', provider: 'npmjs', name: 'es5-ext', revision: '0.10.39' },
    { type: 'npm', provider: 'npmjs', name: 'es5-ext', revision: '0.10.13' },
    { type: 'npm', provider: 'npmjs', name: 'es5-ext', revision: '0.10.11' },
    { type: 'npm', provider: 'npmjs', name: 'es5-ext', revision: '0.10.6' },
    { type: 'npm', provider: 'npmjs', name: 'es5class', revision: '2.3.1' },
    { type: 'npm', provider: 'npmjs', name: 'eslint-release', revision: '0.5.0' },
    { type: 'npm', provider: 'npmjs', name: 'eth-lightwallet', revision: '3.0.1' },
    { type: 'npm', provider: 'npmjs', name: 'ethereumjs-testrpc', revision: '6.0.3' },
    { type: 'npm', provider: 'npmjs', name: 'express-promise', revision: '0.1.9' },
    { type: 'npm', provider: 'npmjs', name: 'extsprintf', revision: '1.0.3' },
    { type: 'npm', provider: 'npmjs', name: 'faker', revision: '1.1.0' },
    { type: 'npm', provider: 'npmjs', name: 'faker', revision: '3.1.0' },
    { type: 'npm', provider: 'npmjs', name: 'fb', revision: '0.7.0' },
    { type: 'npm', provider: 'npmjs', name: 'ffi', revision: '2.2.0' },
    { type: 'npm', provider: 'npmjs', name: 'ffi', revision: '2.0.0' },
    { type: 'npm', provider: 'npmjs', name: 'ffi', revision: '2.3.0' },
    { type: 'npm', provider: 'npmjs', name: 'ffi', revision: '2.1.0' },
    { type: 'npm', provider: 'npmjs', name: 'fibers', revision: '3.1.0' },
    { type: 'npm', provider: 'npmjs', name: 'fibers', revision: '2.0.2' },
    { type: 'npm', provider: 'npmjs', name: 'fibers', revision: '1.0.15' },
    { type: 'npm', provider: 'npmjs', name: 'fibers', revision: '1.0.12' },
    { type: 'npm', provider: 'npmjs', name: 'fibers', revision: '3.1.1' },
    { type: 'npm', provider: 'npmjs', name: 'fibers', revision: '3.0.0' },
    { type: 'npm', provider: 'npmjs', name: 'fibers', revision: '2.0.0' },
    { type: 'npm', provider: 'npmjs', name: 'fingerprintjs2', revision: '1.6.1' },
    { type: 'npm', provider: 'npmjs', name: 'fingerprintjs2', revision: '1.5.1' },
    { type: 'npm', provider: 'npmjs', name: 'fingerprintjs2', revision: '1.8.0' },
    { type: 'npm', provider: 'npmjs', name: 'fingerprintjs2', revision: '1.8.1' },
    { type: 'npm', provider: 'npmjs', name: 'flot', revision: '0.8.0-alpha' },
    { type: 'npm', provider: 'npmjs', name: 'flot-charts', revision: '0.8.3' },
    { type: 'npm', provider: 'npmjs', name: 'follow', revision: '0.10.4' },
    { type: 'npm', provider: 'npmjs', name: 'font-awesome', revision: '4.0.3' },
    { type: 'npm', provider: 'npmjs', name: 'formattor', revision: '0.0.2' },
    { type: 'npm', provider: 'npmjs', name: 'foundation-sites', revision: '6.4.4-rc1' },
    { type: 'npm', provider: 'npmjs', name: 'foundation-sites', revision: '6.4.3' },
    { type: 'npm', provider: 'npmjs', name: 'foundation-sites', revision: '6.3.0' },
    { type: 'npm', provider: 'npmjs', name: 'fsevents', revision: '1.0.0' },
    { type: 'npm', provider: 'npmjs', name: 'ganache-cli', revision: '6.1.8' },
    { type: 'npm', provider: 'npmjs', name: 'ganache-core', revision: '2.3.3' },
    { type: 'npm', provider: 'npmjs', name: 'gentelella', revision: '1.3.0' },
    { type: 'npm', provider: 'npmjs', name: 'geolib', revision: '2.0.24' },
    { type: 'npm', provider: 'npmjs', name: 'geolib', revision: '2.0.23' },
    {
      type: 'git',
      provider: 'github',
      namespace: 'glfw',
      name: 'glfw',
      revision: '999f3556fdd80983b10051746264489f2cb1ef16'
    },
    {
      type: 'git',
      provider: 'github',
      namespace: 'godotengine',
      name: 'godot',
      revision: '8ac39d886307d76c286e804e027fc39f6b5aaac6'
    },
    { type: 'npm', provider: 'npmjs', name: 'graphql-schema-tools', revision: '0.0.6' },
    { type: 'npm', provider: 'npmjs', name: 'graphviz', revision: '0.0.8' },
    { type: 'npm', provider: 'npmjs', name: 'graphviz', revision: '0.0.7' },
    { type: 'npm', provider: 'npmjs', name: 'grid-styled', revision: '4.1.0' },
    { type: 'npm', provider: 'npmjs', name: 'grommet', revision: '1.4.1' },
    { type: 'npm', provider: 'npmjs', name: 'grpc', revision: '1.7.3' },
    { type: 'npm', provider: 'npmjs', name: 'grpc', revision: '1.8.0' },
    { type: 'npm', provider: 'npmjs', name: 'grpc', revision: '1.6.0' },
    { type: 'npm', provider: 'npmjs', name: 'grpc', revision: '1.4.1' },
    { type: 'npm', provider: 'npmjs', name: 'grunt', revision: '0.3.17' },
    { type: 'npm', provider: 'npmjs', name: 'grunt', revision: '0.3.9' },
    { type: 'npm', provider: 'npmjs', name: 'grunt-bower-postinst', revision: '0.2.1' },
    { type: 'npm', provider: 'npmjs', name: 'grunt-combine-media-queries', revision: '1.0.20' },
    { type: 'npm', provider: 'npmjs', name: 'grunt-contrib-qunit', revision: '0.2.0' },
    { type: 'npm', provider: 'npmjs', name: 'grunt-contrib-qunit', revision: '0.2.1' },
    { type: 'npm', provider: 'npmjs', name: 'grunt-contrib-qunit', revision: '0.2.2' },
    { type: 'npm', provider: 'npmjs', name: 'grunt-init', revision: '0.3.2' },
    { type: 'npm', provider: 'npmjs', name: 'grunt-retire', revision: '0.3.12' },
    { type: 'npm', provider: 'npmjs', name: 'grunt-saucelabs', revision: '4.1.2' },
    { type: 'npm', provider: 'npmjs', name: 'grunt-template', revision: '0.2.0' },
    { type: 'npm', provider: 'npmjs', name: 'grunt-webfont', revision: '1.7.2' },
    { type: 'npm', provider: 'npmjs', name: 'grunt-webfont', revision: '1.6.0' },
    { type: 'npm', provider: 'npmjs', name: 'grunt-webfont', revision: '0.5.4' },
    { type: 'npm', provider: 'npmjs', name: 'grunt-webfont', revision: '0.2.2' },
    { type: 'npm', provider: 'npmjs', name: 'grunt-wp-readme-to-markdown', revision: '0.9.0' },
    { type: 'npm', provider: 'npmjs', name: 'gulp-bump', revision: '2.9.0' },
    { type: 'npm', provider: 'npmjs', name: 'gulp-bump', revision: '2.8.0' },
    { type: 'npm', provider: 'npmjs', name: 'gulp-bump', revision: '3.1.1' },
    { type: 'npm', provider: 'npmjs', name: 'gulp-bump', revision: '3.1.3' },
    { type: 'npm', provider: 'npmjs', name: 'gulp-koa-service', revision: '0.0.8' },
    { type: 'npm', provider: 'npmjs', name: 'gulp-wait', revision: '0.0.2' },
    { type: 'npm', provider: 'npmjs', name: 'hammerjs', revision: '1.1.3' },
    { type: 'npm', provider: 'npmjs', name: 'hapi-swagger', revision: '9.1.2' },
    { type: 'npm', provider: 'npmjs', name: 'hapi-swagger', revision: '9.2.0' },
    { type: 'npm', provider: 'npmjs', name: 'hasher', revision: '1.2.0' },
    { type: 'npm', provider: 'npmjs', name: 'hogan.js', revision: '2.0.0' },
    { type: 'npm', provider: 'npmjs', name: 'html5', revision: '0.3.14' },
    { type: 'npm', provider: 'npmjs', name: 'http-proxy', revision: '0.8.7' },
    { type: 'npm', provider: 'npmjs', name: 'iconv', revision: '2.3.1' },
    { type: 'npm', provider: 'npmjs', name: 'iconv', revision: '2.3.0' },
    { type: 'npm', provider: 'npmjs', name: 'ink-docstrap', revision: '0.4.12' },
    {
      type: 'git',
      provider: 'github',
      namespace: 'begla',
      name: 'intrinsic',
      revision: '4ad9680d784b32ed58da856b86016af9590b2eb8'
    },
    {
      type: 'git',
      provider: 'github',
      namespace: 'begla',
      name: 'intrinsic',
      revision: '4acaba7b2874c168aef3b2be3cde2e5a42157e8f'
    },
    { type: 'npm', provider: 'npmjs', name: 'ionic', revision: '2.1.18' },
    { type: 'npm', provider: 'npmjs', name: 'jStat', revision: '1.7.1' },
    { type: 'npm', provider: 'npmjs', name: 'jsdom', revision: '7.2.2' },
    { type: 'npm', provider: 'npmjs', name: 'jsdom', revision: '8.5.0' },
    { type: 'npm', provider: 'npmjs', name: 'jsdom', revision: '9.10.0' },
    { type: 'npm', provider: 'npmjs', name: 'jsdom', revision: '9.9.1' },
    { type: 'npm', provider: 'npmjs', name: 'jsdom', revision: '9.8.3' },
    { type: 'npm', provider: 'npmjs', name: 'jsdom', revision: '9.8.0' },
    { type: 'npm', provider: 'npmjs', name: 'jsdom', revision: '9.5.0' },
    { type: 'npm', provider: 'npmjs', name: 'jsdom', revision: '8.4.1' },
    { type: 'npm', provider: 'npmjs', name: 'jsdom', revision: '9.4.1' },
    { type: 'npm', provider: 'npmjs', name: 'jsdom', revision: '9.2.1' },
    { type: 'npm', provider: 'npmjs', name: 'jsdom', revision: '9.12.0' },
    { type: 'npm', provider: 'npmjs', name: 'jsdom', revision: '9.11.0' },
    { type: 'npm', provider: 'npmjs', name: 'jsdom', revision: '9.4.2' },
    { type: 'npm', provider: 'npmjs', name: 'jsface', revision: '2.4.9' },
    { type: 'npm', provider: 'npmjs', name: 'jshint', revision: '1.0.0' },
    { type: 'npm', provider: 'npmjs', name: 'jshint', revision: '1.1.0' },
    { type: 'npm', provider: 'npmjs', name: 'json-lint', revision: '0.1.0' },
    { type: 'npm', provider: 'npmjs', name: 'jsondiffpatch', revision: '0.0.5' },
    { type: 'npm', provider: 'npmjs', name: 'jsonfn', revision: '0.31.0' },
    { type: 'npm', provider: 'npmjs', name: 'jspath', revision: '0.3.4' },
    { type: 'npm', provider: 'npmjs', name: 'jstat', revision: '1.5.3' },
    { type: 'npm', provider: 'npmjs', name: 'juicer', revision: '0.6.14' },
    { type: 'npm', provider: 'npmjs', name: 'kad-localstorage', revision: '0.0.7' },
    { type: 'npm', provider: 'npmjs', name: 'karma-jquery', revision: '0.2.2' },
    { type: 'npm', provider: 'npmjs', name: 'karma-jquery', revision: '0.1.0' },
    { type: 'npm', provider: 'npmjs', name: 'kinetic', revision: '5.2.0' },
    { type: 'npm', provider: 'npmjs', name: 'know-your-http-well', revision: '0.2.0' },
    {
      type: 'git',
      provider: 'github',
      namespace: 'glennrp',
      name: 'libpng',
      revision: 'eddf9023206dc40974c26f589ee2ad63a4227a1e'
    },
    {
      type: 'git',
      provider: 'github',
      namespace: 'nodejs',
      name: 'node',
      revision: '8c70b2084ce5f76ea1e3b3c4ccdeee4483fe338b'
    },
    {
      type: 'git',
      provider: 'github',
      namespace: 'cmu-perceptual-computing-lab',
      name: 'openpose',
      revision: '29ea7e24dce4abae30faecf769855823ad7bb637'
    },
    {
      type: 'git',
      provider: 'github',
      namespace: 'cmu-perceptual-computing-lab',
      name: 'openpose',
      revision: '28f605c8eead93dda15608563108ca74e9424b1b'
    },
    {
      type: 'git',
      provider: 'github',
      namespace: 'openssl',
      name: 'openssl',
      revision: '3ce7bc40a3c48da1c96c2d04c10045bd797c6aa3'
    },
    {
      type: 'git',
      provider: 'github',
      namespace: 'php',
      name: 'php-src',
      revision: '643a161a24e662fd2afa9bf3591b105f4881e93e'
    },
    {
      type: 'git',
      provider: 'github',
      namespace: 'scottjehl',
      name: 'respond',
      revision: '20b7f4a192bb910c8c7e067b961de38519d334e4'
    },
    {
      type: 'git',
      provider: 'github',
      namespace: 'avast-tl',
      name: 'retdec',
      revision: 'cbd7685d31185a0d781028cfce24574feed07fc2'
    },
    {
      type: 'git',
      provider: 'github',
      namespace: 'tensorflow',
      name: 'tensorflow',
      revision: 'd860915b0198ddb96f93e9e97a789af156544dc6'
    },
    {
      type: 'git',
      provider: 'github',
      namespace: 'mrdoob',
      name: 'three.js',
      revision: 'ca224d29a6c770ab8ca78536b43b989822559e2a'
    },
    {
      type: 'git',
      provider: 'github',
      namespace: 'mrdoob',
      name: 'three.js',
      revision: '58e46224b8d5f51982b55ed7f18c932cc96da46e'
    },
    {
      type: 'git',
      provider: 'github',
      namespace: 'mrdoob',
      name: 'three.js',
      revision: 'ef5f05d71bb33e5811560851547fe4f0bc33e153'
    },
    {
      type: 'git',
      provider: 'github',
      namespace: 'mrdoob',
      name: 'three.js',
      revision: '4862f5f1111346a957ac3e0cb0858be1568d0e03'
    },
    {
      type: 'git',
      provider: 'github',
      namespace: 'mrdoob',
      name: 'three.js',
      revision: 'cc57273cf4ae579f5dd638aed213e7aadf161f26'
    },
    {
      type: 'git',
      provider: 'github',
      namespace: 'mrdoob',
      name: 'three.js',
      revision: '2662bab9e7310526f0a14c5dc435c5604cab170c'
    },
    {
      type: 'git',
      provider: 'github',
      namespace: 'mrdoob',
      name: 'three.js',
      revision: 'a8853b88abd50c4408062fb02cd1fd5b44904d54'
    },
    {
      type: 'git',
      provider: 'github',
      namespace: 'mrdoob',
      name: 'three.js',
      revision: 'f7e120dfdc3c287d8792a08eb8cc2e29a17768cf'
    },
    {
      type: 'git',
      provider: 'github',
      namespace: 'mrdoob',
      name: 'three.js',
      revision: 'f4c54b2064d6e03495d88633488a66067a67ec2e'
    },
    {
      type: 'git',
      provider: 'github',
      namespace: 'mrdoob',
      name: 'three.js',
      revision: 'f48940bfc9cd63ae397518df9cff28af5043adef'
    },
    {
      type: 'git',
      provider: 'github',
      namespace: 'mrdoob',
      name: 'three.js',
      revision: '25245257b16430da35b502031fad0cfd7ddccb1b'
    },
    {
      type: 'git',
      provider: 'github',
      namespace: 'mrdoob',
      name: 'three.js',
      revision: '9792a0fa2c803eb96cf45869d184d91fc99f934d'
    },
    {
      type: 'git',
      provider: 'github',
      namespace: 'mrdoob',
      name: 'three.js',
      revision: 'f396baf5876eb41bcd2ee34eb65b1f97bb92d530'
    },
    {
      type: 'git',
      provider: 'github',
      namespace: 'mrdoob',
      name: 'three.js',
      revision: 'eb6c64d6db94446a5c40c6779eede6ede8b89c1c'
    },
    {
      type: 'git',
      provider: 'github',
      namespace: 'mrdoob',
      name: 'three.js',
      revision: '8413a860aa95ed29c79cbb7f857c97d7880d260f'
    },
    {
      type: 'git',
      provider: 'github',
      namespace: 'mrdoob',
      name: 'three.js',
      revision: '8673cc801c8887ac143b6dc4535c712ff7bf4af4'
    },
    {
      type: 'git',
      provider: 'github',
      namespace: 'begeekmyfriend',
      name: 'yasea',
      revision: 'b7a613fbb7d19d93406199290d8461df05086f45'
    }
  ]
}
