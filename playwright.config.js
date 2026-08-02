// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  reporter: 'html',
  
  timeout : 80000,

  expect: {
    timeout: 50000, // 👈 this is the wait for expect assertions
  },
  
  use: {
    
    browserName : 'chromium',

    headless : false
    
  },

  
});

