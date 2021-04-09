# Build Setup

## 移动端项目

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev 项目文件夹名

# build for production with minification
npm run build    项目文件夹名

# build for production and view the bundle analyzer report
npm run build --report 项目文件夹名
```

## 取消同一接口同时多次请求配置规则

``` bash
在发送请求接口的时添加cancelGroupName = 'add'字段参数，字段固定，内容根据接口去自由定制 保证唯一性，避免同一接口同时重复请求
```
