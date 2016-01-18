## 安装依赖

```
npm install
```

如果没有安装 TypeScript, 安装:

```
npm install -g typescript
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
> 注: 目前使用 polyfill 兼容 IE8.

## 命令:

### 开发

```
npm run start -- --app=<app-name> --hot
```

当然你也可以不使用 `--hot`, 主要是在兼容 IE8.

```
npm run start -- --app=<app-name>
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

## 兼容 IE8

兼容 polyfill:

```
<!--[if lt IE 9]>
<script src="/assets/js/vendor/es5-shim.min.js"></script>
<script src="/assets/js/vendor/es5-sham.min.js"></script>
<![endif]-->
```

保留字, 比如: exports, eval. 其中 eval 主要是开发时, 故在开发是不使用 eval (webpack devtools).

exports 使用 [es3ify](https://github.com/spicyj/es3ify), 其做的改变是:

```
// In
var x = {class: 2,};
x.class = [3, 4,];

// Out:
var x = {"class": 2};
x["class"] = [3, 4];
```
