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

  rules: {
    'no-underscore-dangle': 'off',
    'func-names': 'off',
  },
};
