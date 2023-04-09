### 1

```sh
yarn add -D @nuxt/test-utils vitest @vitest/coverage-c8
```

### 2

./package.json

```diff
  "scripts": {
+   "test": "vitest",
+   "coverage": "vitest run --coverage"
  }
```
