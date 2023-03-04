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
  moduleFileExtensions: ['js', 'mjs', 'cjs', 'jsx', 'ts', 'tsx', 'json', 'node'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/resource/assetMock.js',
    '\\.(css|less|scss|sass)$': '<rootDir>/src/resource/styleMock.js',
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
};
