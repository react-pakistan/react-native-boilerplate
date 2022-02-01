/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

/* eslint-disable @typescript-eslint/no-var-requires */

const { getDefaultConfig } = require('metro-config');

const { resolver: defaultResolver } = getDefaultConfig.getDefaultValues();
const defaultSourceExts = require('metro-config/src/defaults/defaults').sourceExts;

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  resolver: {
    sourceExts: process.env.RN_SRC_EXT
      ? [...process.env.RN_SRC_EXT.split(',').concat(defaultSourceExts), 'cjs'] // <-- cjs added here
      : [...defaultSourceExts, 'cjs'], // <-- cjs added here
  },
};
