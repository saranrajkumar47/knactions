// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'Firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'WebKit',
      use: { browserName: 'webkit' },
    },
  ],
  reporter: [['html', { open: 'never' }]], // Generates HTML report
  retries: 1,  // Retries once if a test fails
  use: {
    headless: true,  // Runs browsers in headless mode
    baseURL: 'http://localhost:3000', // Your app's URL
  },
});
