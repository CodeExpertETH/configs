# Personal configs

Credit:  Forked from [ntnyq](https://github.com/ntnyq/configs)

# EsLint config with Prettier

## Usage

### Install

```bash
$ npm i @code-expert/eslint-config-prettier -D
# OR
$ yarn add @code-expert/eslint-config-prettier -D
```

### Extend this config

in `.eslintrc.js`

```js
module.exports = {
    root: true,

    extends: ['@code-expert/prettier'],

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
        "extends": "@code-expert/prettier"
    }
}
```
