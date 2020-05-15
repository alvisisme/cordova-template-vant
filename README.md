# cordova-template-vant

[![Build Status](https://img.shields.io/travis/com/alvisisme/cordova-template-vant?style=flat-square)](https://travis-ci.com/alvisisme/cordova-template-vant)

cordova,vue和vant的工程模板

## 如何使用

```bash
cordova create myapp --template git+https://github.com/alvisisme/cordova-template-vant.git
cd myapp
mv gitignore .gitignore
npm install
npm run build
cordova platform add android
cordova prepare android
cordova build android
cordova run android
```

## 注意事项

当前版本通过 cordova create 命令以 git+https 拉取模板时, .gitignore 文件无法被正确命名，需要在创建工程后，手动将 gitignore 文件重命名为.gitignore。

此问题可能会在 cordova-create@>=3 时修复。

* [cordova-app-hello-world pull-request 50](https://github.com/apache/cordova-app-hello-world/pull/50)
* [cordova-app-hello-world issues 30](https://github.com/apache/cordova-app-hello-world/issues/30)
* [cordova-discuss issues 69](https://github.com/apache/cordova-discuss/issues/69)

## 参考引用

* [Cordova Template Guide](https://cordova.apache.org/docs/en/latest/guide/cli/template.html)
* [Cordova hello world app](https://github.com/apache/cordova-app-hello-world)