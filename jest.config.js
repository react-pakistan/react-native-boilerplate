module.exports = {
  collectCoverageFrom: [
    '<rootDir>/**/*.{ts,tsx,js,jsx}',
    '!<rootDir>/**/*.story.{ts,tsx,js,jsx}',
  ],
  coverageReporters: ['json-summary', 'lcov', 'text'],
  coverageDirectory: '<rootDir>/../coverage',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  preset: 'react-native',
  setupFiles: [
    '<rootDir>/src/__tests__/jest.setup.js',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/src/__tests__/jest.setup.js',
  ],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(tsx?|ts?)$',
  transform: {
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.spec.json',
      },
    ],
  },
  transformIgnorePatterns: [
    // eslint-disable-next-line
    'node_modules/(?!react-native|@react-native|react-native-onboarding-swiper|react-navigation|@react-native-community/segmented-control|@react-native-community/viewpager/)'
  ],
};
