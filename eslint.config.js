module.exports = {
  extends: '@react-pakistan/eslint-config-shared/ts-react/.eslintrc.json',
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
