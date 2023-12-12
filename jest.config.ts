import type { Config } from "jest";

const config: Config = {
  verbose: true,
  testEnvironment: "node",
  collectCoverage: true,
  preset: "ts-jest",
  setupFilesAfterEnv: ["./test-config.ts"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
};

export default config;
