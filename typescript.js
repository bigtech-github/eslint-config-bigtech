module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "airbnb"
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    'linebreak-style': 0,
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: [
          '.tsx',
          '.jsx'
        ],
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      { 
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
};
