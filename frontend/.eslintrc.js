module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:jsx-a11y/strict',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'import/no-unresolved': 'off',
    'prettier/prettier': ['error'],
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.stories.js'],
      },
    ],
    camelcase: 'off',
  },
  plugins: ['react', 'react-hooks', 'jsx-a11y', 'prettier'],
  settings: {
    'import/extensions': ['.js', '.jsx'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
      alias: {
        map: [
          ['@Routes', './src/routes'],
          ['@UI/Atoms', './src/components/atoms'],
          ['@UI/Molecules', './src/components/molecules'],
          ['@UI/Organisms', './src/components/organisms'],
          ['@UI/Templates', './src/components/templates'],
          ['@UI/Pages', './src/pages'],
          ['@Hooks', './src/hooks'],
          ['@Utils', './src/utils'],
          ['@Static', './src/static'],
          ['@Styles', './src/styles'],
        ],
      },
    },
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
};
