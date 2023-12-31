module.exports = {
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.ts(x)?",
    "!src/app/**",
    "!src/lib/registry.tsx",
    "!src/types/**",
    "!src/pages/**/*.tsx",
    "!src/styles/**",
    "!src/**/stories.tsx",
    "!src/styles/**/*.ts",
    "!src/utils/apollo.ts",
    "!src/types/**/*.d.ts",
    "!src/graphql/**/*.ts",
    "!src/**/mock.ts",
  ],
  setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"],
  modulePaths: ["<rootDir>/src/", "<rootDir>/.jest"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
  moduleNameMapper: {
    "^styled-components":
      "styled-components/dist/styled-components.browser.cjs.js",
  },
  prettierPath: null,
  moduleDirectories: ["node_modules", "src"],
}
