module.exports = {
  preset: 'react-native',
  rootDir: './src',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFiles: [
    '<rootDir>/__tests__/jest.setup.js',
  ],
  transformIgnorePatterns: [
    "node_modules/(?!react-native|@react-native|react-native-onboarding-swiper|react-navigation|react-native-fabric|@ptomasroos/react-native-multi-slider|@react-native-community/segmented-control|@react-native-community/viewpager|@react-native-community|react-native-paper|@react-native-firebase/database|@react-native-firebase/app)"
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
