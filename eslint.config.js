module.exports = {
  extends: '@react-pakistan/eslint-config-shared/common-js/.eslintrc.json',
  parser: 'babel-eslint',
  env: {
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {},
};
