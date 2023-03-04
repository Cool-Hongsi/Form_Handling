module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  verbose: true,
  forceExit: true,
  clearMocks: true,
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/src/setUpTests.ts'],
  modulePaths: ['<rootDir>/src'],
};
