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
  // An array of file extensions your modules use
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

  // A map from regular expressions to paths to transformers
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
};

module.exports = config;
