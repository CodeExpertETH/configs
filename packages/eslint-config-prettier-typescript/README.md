# Personal configs

Credit:  Forked from [ntnyq](https://github.com/ntnyq/configs)

# EsLint config for TypeScript with Prettier

## Usage

### Install

```bash
$ npm i @code-expert/eslint-config-prettier-typescript -D
# OR
$ yarn add @code-expert/eslint-config-prettier-typescript -D

TODO: yarn add -D eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

### Extend this config

in `.eslintrc.js`

```js
module.exports = {
    root: true,

    extends: ['@code-expert/prettier-typescript'],

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
        "extends": "@code-expert/prettier-typescript"
    }
}
```
