/**
 * React with hooks
 */

module.exports = {
  extends: [
    "@code-expert",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
  ],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx",".ts", ".tsx", ".json"],
      },
    },

    react: {
      pragma: "React",
      version: "detect",
    },

    propWrapperFunctions: [
      "forbidExtraProps", // https://www.npmjs.com/package/airbnb-prop-types
      "exact", // https://www.npmjs.com/package/prop-types-exact
      "Object.freeze", // https://tc39.github.io/ecma262/#sec-object.freeze
    ],
  },

  // Overrides rules
  rules: {
    'react/destructuring-assignment': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-unstable-nested-components': 'off',
    'react/state-in-constructor': 'off',
    'react-hooks/exhaustive-deps': [
      'error',
      {
        additionalHooks: '(useTracker|useDeepCompare(Effect|Memo))',
      },
    ],
    'react/static-property-placement': ['error', 'static public field'],
  },
};
