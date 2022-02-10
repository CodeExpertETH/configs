/**
 * Based on TypeScript ESLint Rules
 *
 * @see https://github.com/typescript-eslint/typescript-eslint
 * @see https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser
 * @see https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
 */

module.exports = {
  extends: [
    "plugin:promise/recommended",
    "@code-expert",
    // Enable all the recommended rules for @typescript-eslint/eslint-plugin
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
  ],

  // Use @typescript-eslint/eslint-plugin
  plugins: ["@typescript-eslint"],

  // Use @typescript-eslint/parser
  parser: "@typescript-eslint/parser",

  // Set options for @typescript-eslint/parser
  parserOptions: {
    "ecmaVersion": 2020,
    "sourceType": "module",
    // Set default project value
    // @see https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#parseroptionsproject
    project: ["tsconfig.json", "packages/**/tsconfig.json"],
  },

  // Rules overrides
  rules: {
    "@typescript-eslint/await-thenable": 'error',
    "@typescript-eslint/no-floating-promises": 'error',
    "@typescript-eslint/no-empty-function": [
      "error",
      {
        "allow": [
          "private-constructors",
          "protected-constructors"
        ]
      }
    ]
  },
};
