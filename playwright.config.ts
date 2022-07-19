// playwright.config.ts
import { type PlaywrightTestConfig, devices } from '@playwright/test';

const RPconfig = {
  'token': '19955f5e-b094-44e0-87da-090e5c90e9ec',
  'endpoint': 'https://demo.reportportal.io/api/v1',
  'project': 'chramarajesh_personal',
  'launch': 'chramarajesh_TEST_EXAMPLE',
  'attributes': [
    {
      'key': 'key',
      'value': 'value',
    },
    {
      'value': 'value',
    },
  ],
  'description': 'Your launch description',
};

const config: PlaywrightTestConfig = {
  reporter: [['@reportportal/agent-js-playwright', RPconfig]],
  testDir: './e2e',
  retries: 0,
  workers: 1,
  fullyParallel: true,
  //reporter: 'html',
  expect:{
    timeout:3000,
  },
  
  use: {
    trace: 'on-first-retry',
    headless: false,
    ignoreHTTPSErrors: true,
    launchOptions: {
      slowMo: 50,
    },
    screenshot:'on',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
  outputDir: 'test-results/',

 
};
export default config;

//D:\Playwright-cucumber-Typescript\web\playwright.config.ts