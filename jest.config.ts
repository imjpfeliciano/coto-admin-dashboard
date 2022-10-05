import type { Config } from "jest";

const config: Config = {
  verbose: true,
  modulePathIgnorePatterns: ["<rootDir>/e2e/"],
};

export default config;
