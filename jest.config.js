module.exports = {
  preset: 'react-native',
  rootDir: './src',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFiles: [
    '<rootDir>/__tests__/jest.setup.js',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/__tests__/jest.setup.js',
  ],
  coverageReporters: ['json-summary', 'lcov', 'text'],
  coverageDirectory: '<rootDir>/../coverage',
  collectCoverageFrom: [
    '<rootDir>/**/*.{ts,tsx,js,jsx}',
    '!<rootDir>/**/*.story.{ts,tsx,js,jsx}',
  ],
};
