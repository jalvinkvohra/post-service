import type { Config } from "jest";

const config: Config = {
  verbose: true,
  testEnvironment: "node",
  collectCoverage: true,
  preset: "ts-jest",
  setupFilesAfterEnv: ["./test-config.ts"]
};

export default config;
