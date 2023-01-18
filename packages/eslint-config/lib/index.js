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
    'redos', 'fp-ts', 'no-only-tests', 'promise'
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
    'promise/no-return-in-finally': 'error',
    'promise/no-return-wrap': 'error',
    'promise/param-names': 'error',
    'require-await': 'error',
    'object-shorthand': 'error',
    'redos/no-vulnerable': 'error'
  }
};
