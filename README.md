# vue-fa-modal

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/82df5109eadc43638ae23bcda9602b74)](https://www.codacy.com/manual/gd4Ark/vue-fa-modal?utm_source=github.com&utm_medium=referral&utm_content=gd4Ark/vue-fa-modal&utm_campaign=Badge_Grade)
[![npm](https://img.shields.io/npm/v/vue-fa-modal)](https://www.npmjs.com/package/vue-fa-modal)
[![npm](https://img.shields.io/npm/dm/vue-fa-modal)](https://www.npmjs.com/package/vue-fa-modal)
[![NPM](https://img.shields.io/npm/l/vue-fa-modal)](https://github.com/gd4Ark/vue-fa-modal/blob/master/LICENSE)

一个基于 Vue.js 与 Element-UI 的简单弹窗组件

特点：

- 基于 Element-UI 的 Dialog 对话框 进行扩展
- 集成了 拖拽、操作按钮

## 安装

使用 npm 或者 yarn 进行安装

```bash
$ npm install vue-fa-modal
$ yarn add vue-fa-modal
```

## 如何使用

```js
import VueFaModal from 'vue-fa-modal'
```

```vue
<vue-fa-modal open-btn-text="点击我" @submit="submit" />
```

## 参数

|     名称      | 必填 |   类型   |  默认值  |               描述                |
| :-----------: | :--: | :------: | :------: | :-------------------------------: |
|     title     |      |  String  |   弹窗   |            弹窗的标题             |
|     width     |      |  String  |   95%    |             弹窗宽度              |
|   disabled    |      | Boolean  |  false   |  禁用打开按钮、禁用 visible 事件  |
|  needOpenBtn  |      | Boolean  |   true   |           启用打开按钮            |
|  needFooter   |      | Boolean  |   true   |         启用弹窗底部按钮          |
|  btnLoading   |      | Boolean  |  false   |         提交按钮加载动画          |
|  openBtnText  |      |  String  | 打开弹窗 |          打开按钮的文字           |
| submitBtnText |      |  String  |   提交   |          提交按钮的文字           |
| cancelBtnText |      |  String  |   取消   |          取消按钮的文字           |
|  openBtnSize  |      |  String  |  small   |          打开按钮的尺寸           |
| otherBtnSize  |      |  String  |    ’‘    |          其他按钮的尺寸           |
|  openBtnType  |      |  String  |    ’‘    |          打开按钮的类型           |
|  openBtnIcon  |      |  String  |    ’‘    |          打开按钮的图标           |
| openBtnStyle  |      |  Object  |    {}    |          打开按钮的样式           |
|  beforeOpen   |      | Function |  空操作  | 打开按钮之前，返回 false 则不打开 |

其他属性详见 Element-UI 文档：[链接](https://element.eleme.cn/#/zh-CN/component/dialog)

## Slots

|      名称      |           描述           |
| :------------: | :----------------------: |
|       -        |        弹窗的内容        |
|    open-btn    |      打开按钮的区域      |
|     title      |       标题区的内容       |
|     footer     |     按钮操作区的内容     |
| footer-prepend | 按钮操作区，内置按钮前面 |
| footer-middle  | 按钮操作区，内置按钮中间 |
| footer-append  | 按钮操作区，内置按钮后面 |

## 事件

|  名称  |     描述     |
| :----: | :----------: |
|  open  | 打开弹窗回调 |
| close  | 关闭弹窗回调 |
| submit |   提交事件   |

## 方法

可以通过直接调用组件方法

|  名称   |   描述   |
| :-----: | :------: |
| visible | 显示弹窗 |
| hidden  | 关闭弹窗 |
| submit  |   提交   |

## DEMO

[demo link](http://4ark.me/vue-fa-modal)

## Author

> [Blog](https://4ark.me/) · GitHub [@gd4Ark](https://github.com/gd4Ark)

## License

[MIT](./LICENSE)

## Conclusion

If you think my project is good👏 . Give a Star⭐ encouragement.
