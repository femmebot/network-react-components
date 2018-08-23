'use strict'

module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'script',
  },
  plugins: ['compat', 'prettier'],
  extends: ['eslint:recommended', 'prettier'],
  env: {
    node: true,
  },
  rules: {
    'no-console': ['warn'],
    'no-unused-vars': ['error', {argsIgnorePattern: '^_'}],
    'no-var': 'error',
    'prefer-const': 'error',
    'import/prefer-default-export': 'off',
    'prettier/prettier': 'error',
    camelcase: 'off',
    strict: ['error', 'safe'],
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
  overrides: [
    {
      parserOptions: {
        sourceType: 'module',
      },
      env: {
        browser: true,
      },
      files: [
        'src/**/*',
        'styleguide/**/*',
      ],
    },
  ],
}
