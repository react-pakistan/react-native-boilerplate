module.exports = {
  env: {
    test: {
      presets: [
        'module:metro-react-native-babel-preset',
      ],
    },
  },
  presets: [
    'module:metro-react-native-babel-preset',
    '@babel/preset-typescript',
  ],
  plugins: [
    'react-native-reanimated/plugin',
  ],
};
