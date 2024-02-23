/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  setupFilesAfterEnv: [
    "<rootDir>/src/setupTests.js"
  ],
  testEnvironment: "jsdom",
  moduleFileExtensions: [
    "js",
    "mjs",
    "cjs",
    "jsx",
    "ts",
    "tsx",
    "json",
    "node"
  ],
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
};

module.exports = config;
