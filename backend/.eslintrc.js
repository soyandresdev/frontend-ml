module.exports = {
  env: {
    es2020: true,
    node: true,
    'jest/globals': true,
  },
  extends: ['prettier', 'airbnb-base'],
  plugins: ['prettier', 'jest'],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prettier/prettier': 'error',
    camelcase: 'off',
    'comma-dangle': 'off',
  },
};
