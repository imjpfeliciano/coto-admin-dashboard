import type { PlaywrightTestConfig } from "@playwright/test";
const config: PlaywrightTestConfig = {
  webServer: {
    command: "npm run start",
    url: "http://localhost:3000/",
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    headless: process.env.CI ? true : false,
    baseURL: "http://localhost:3000/",
  },
  testDir: "e2e",
};
export default config;
