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
    'redos/no-vulnerable': 'error'
  }

};
