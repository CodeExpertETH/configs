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
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'no-redeclare': 'off',
    'no-dupe-class-members': 'off',

    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/restrict-template-expressions': 'error',
    '@typescript-eslint/no-base-to-string': 'error',
    '@typescript-eslint/restrict-plus-operands': 'error',
    '@typescript-eslint/no-redeclare': 'off',
    '@typescript-eslint/dot-notation': 'off', // is in conflict with noPropertyAccessFromIndexSignature
    '@typescript-eslint/strict-boolean-expressions': [
      'error',
      {
        allowString: true,
        allowNumber: true,
        allowNullableObject: true,
        allowNullableBoolean: true,
        allowNullableString: false,
        allowNullableNumber: false,
        allowAny: false,
        allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
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
