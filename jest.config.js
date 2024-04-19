/* @type {import('jest').Config} */
const config = {
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  moduleNameMapper: {
    "^.+\\.svg$": "jest-svg-transformer",
    "^.+\\.(css|less|scss)$": "identity-obj-proxy"
  },
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', 'src'],
  verbose: true,
  // collectCoverage: true,
  // collectCoverageFrom: ["./src/**"],
  // coverageThreshold: {
  //   global: {
  //     lines: 85
  //   }
  // }
}

export default config