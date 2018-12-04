// Global setup script
const chalk = require('chalk')
const puppeteer = require('puppeteer')
const fs = require('fs')
const mkdirp = require('mkdirp')
const os = require('os')
const path = require('path')

const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup')

module.exports = async function() {
  console.log(chalk.green('Setup Puppeteer'))
  // Puppeteer launch
  const browser = await puppeteer.launch({ headless: false, slowMo: 500, waitUntil: 'networkidle' })
  // Storing the browser instance so we can close it later in teardown
  global.__BROWSER_GLOBAL__ = browser

  mkdirp.sync(DIR)
  fs.writeFileSync(path.join(DIR, 'wsEndpoint'), browser.wsEndpoint())
}
