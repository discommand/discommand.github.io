# Updating from v11 to v12

- **This package is now Pure ESM. [See this document for details.](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)**

## Command

```diff
  constructor() {
-   super('name')
+   super({
+     name: 'command-name',
+     description: 'command-description'
+   })
-   this.data = {
-     name: 'command-name',
-     description: 'command-description'
-   }
  }
```
