## 安装依赖

```
npm install
```

如果没有安装 d.ts 则运行:

```
tsd install
```

注意, 虽然使用了 TypeScript, 但是并没有使用 webpack 打包 TypeScript, 而是使用原生的 tsc 命令进行编译.

考虑到 live load, tsconfig.js 配置为:

```
"target": "es2015",
"module": "es2015",
"jsx": "preserve",
```

然后在本地:

```
tsc --watch
```

> 注: 考虑到 ie8 的兼容性, 在最终打包到生产是, 可能使用 "target": "es3" 等其他编译选项.

## 命令:

### 开发

```
npm run start -- --app=<app-name> --hot
```

### 编译
```
npm run build:dev -- --app=<app-name>
npm run build -- --app=<app-name>
```

例如:

```
npm run start -- --app=lietou --hot
```
