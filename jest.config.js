const {defaults} = require('jest-config');

module.exports = {
  testMatch: ['<rootDir>/src/**/?(*.)test.{ts,tsx}'],
  transform: {
    "^.+\\.(ts|tsx)?$": ["ts-jest", { "useESM": true }],
  },
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  setupFilesAfterEnv: ["./jest.setup.ts"],
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "mjs",
    "cjs",
    "jsx",
    "json",
    "node",
  ],
  moduleNameMapper: {
    "\\.(s?css|less)$": "identity-obj-proxy",
    "^shared(.*)$": "<rootDir>/src/shared$1",
  },
  collectCoverage: true,
  testEnvironment: "jsdom",
  verbose: true,
  globals: {
    "ts-jest": {
      useESM: true,
    },
  },
};
