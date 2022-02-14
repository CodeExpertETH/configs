/**
 * React.js Rules with Typescript Rules
 */

module.exports = {
  extends: ["@code-expert/react", "@code-expert/typescript"],
  rules: {


  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'react/prop-types': 'off',
        'react/require-default-props': 'off',
        "react/jsx-key": "off",
      },
    },
  ],

};
