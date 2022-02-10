# Personal TypeScript config

Based on the work of [unlikelystudio](https://github.com/unlikelystudio/bases)

## Installation

```bash
npm install --save-dev @code-expert/configs-typescript


# or

yarn add -D @code-expert/configs-typescript
```

### Backend / Library

In your tsconfig.json

```json
{
  "extends": "@code-expert/configs-typescript/library.json",

  "include": ["src/**/*.ts", "src/types/**/*.d.ts"],
  "exclude": ["node_modules", "**/node_modules/*"]
}
```

### Dom

In your tsconfig.json

```json
{
  "extends": "@code-expert/configs-typescript/dom.json",

  "include": ["src/**/*.ts", "src/types/**/*.d.ts"],
  "exclude": ["node_modules", "**/node_modules/*"]
}
```
