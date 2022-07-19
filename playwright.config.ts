// playwright.config.ts
import { type PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './e2e',
  retries: 0,
  workers: 1,
  fullyParallel: true,
  reporter: 'html',
  expect:{
    timeout:3000,
  },
  
  use: {
    trace: 'on-first-retry',
    headless: false,
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