# Personal configs

Credit:  Forked from [ntnyq](https://github.com/ntnyq/configs)

# EsLint config

## Usage

### Install

```bash
$ npm i @code-expert/eslint-config -D
# OR
$ yarn add @code-expert/eslint-config -D
```

### Extend this config

in `.eslintrc.js`

```js
module.exports = {
    root: true,

    extends: ['@code-expert'],

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
        "extends": "@code-expert"
    }
}
```
