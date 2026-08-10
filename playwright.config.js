import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  timeout: 30 * 1000,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,

  reporter: [
    ['html', {
      outputFolder: 'playwright-report',
      open: 'never'
    }],
    ['junit', {
      outputFile: 'test-results/results.xml'
    }]
  ],

  use: {
    baseURL: 'https://rahulshettyacademy.com/client/#/auth/login',

    headless: false,

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'retain-on-failure'
  }
});