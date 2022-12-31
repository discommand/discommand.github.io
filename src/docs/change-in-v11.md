# Updating from v10 to v11

## DiscommandClient

```diff
-  loadType: LoadType.File
```

## Command

```diff
 constructor() {
-   super()
+   super('command-name')
-   this.name = 'command-name'
-   this.description = 'commmand-description'
+   this.data = {
+     name: 'command-name',
+     description: 'command-description'
+  }
}
```

## Listener

```diff
 constructor() {
-   super()
+   super('listener-name')
-   this.name = 'listener-name'
}
```
