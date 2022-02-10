# Personal configs

Credit:  Forked from [ntnyq](https://github.com/ntnyq/configs)

# EsLint config for React.js with Prettier

## Usage

### Install

```bash
$ npm i @code-expert/eslint-config-prettier-react -D
# OR
$ yarn add @code-expert/eslint-config-prettier-react -D
```

### Extend this config

in `.eslintrc.js`

```js
module.exports = {
    root: true,

    extends: ['@code-expert/prettier-react'],

    rules: {
        // Override rules
    },
}
```

in `package.json`

```json
{
    "eslintConfig": {
        "root": true,
        "extends": "@code-expert/prettier-react"
    }
}
```
