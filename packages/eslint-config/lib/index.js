module.exports = {
  extends: ["eslint:recommended"],
  env: {
    browser: true,
    es2020: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'redos'
  ],
  rules: {
    'no-underscore-dangle': 'off',
    'arrow-body-style': 'error',
    'fp-ts/no-discarded-pure-expression': 'error',
    'fp-ts/no-redundant-flow': 'error',
    'fp-ts/prefer-bimap': 'error',
    'fp-ts/prefer-chain': 'error',
    'fp-ts/prefer-traverse': 'error',
    'no-only-tests/no-only-tests': 'error',
    'require-await': 'error',
    'object-shorthand': 'error',
    'redos/no-vulnerable': 'error'
  }

};
