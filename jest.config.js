module.exports = {
  clearMocks: true,
  collectCoverageFrom: [
    "<rootDir>/src/**/*.{ts,tsx,js,jsx}",
    "!<rootDir>/src/**/*.d.ts",
    "!<rootDir>/src/**/__mocks__/**",
    "!<rootDir>/src/**/index.{ts,tsx,js,jsx}",
    "!<rootDir>/*.",
  ],
  moduleNameMapper: {
    "^@config(.*)$": "<rootDir>/src/config$1",
    "^@components(.*)$": "<rootDir>/src/components$1",
    "^@containers(.*)$": "<rootDir>/src/containers$1",
    "^@redux(.*)$": "<rootDir>/src/redux$1",
    "^@lib(.*)$": "<rootDir>/src/lib$1",
    "^@services(.*)$": "<rootDir>/src/services$1",
    "^@assets(.*)$": "<rootDir>/src/assets$1",
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
    "styled-components": "<rootDir>/node_modules/styled-components/dist/styled-components.cjs.js"
  },
  coverageDirectory: "coverage",
  moduleFileExtensions: ["js", "json", "jsx", "node", "ts", "tsx"],
  setupFiles: ["<rootDir>/enzyme.config.js"],
  testMatch: ['**/__tests__/*.(test|spec).{ts,tsx,js,jsx}'],
  verbose: false,
  collectCoverage: true,
  // https://istanbul.js.org/docs/advanced/alternative-reporters
  coverageReporters: ["lcov", "clover", "text-summary", "text", "html", "cobertura"],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
};
