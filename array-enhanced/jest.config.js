module.exports = {
  testEnvironment: "node",
  roots: ["<rootDir>"],
  testMatch: ["**/__tests__/*.spec.js"],
  verbose: true,
  moduleNameMapper: {},
  moduleFileExtensions: ["ts", "js", "json", "node"],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  modulePathIgnorePatterns: [],
  coverageReporters: [],
};
