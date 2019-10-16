# vue-fa-modal

一个基于 Vue.js 与 Element-UI 的简单弹窗组件

## 安装

``` bash
$ npm install vue-fa-modal
$ yarn add vue-fa-modal
```

## 如何使用

```js
import VueFaModal from 'vue-fa-modal'
```

```vue
<vue-fa-modal open-btn-text="点击我" @submit="submit">
  <div slot="body">
    内容
  </div>
</vue-fa-modal>
```

## 参数

|      名称       | 必填 |   类型   |  默认值  |        描述        |
| :-------------: | :--: | :------: | :------: | :----------------: |
|      title      |      |  String  |   弹窗   |     弹窗的标题     |
| openBtnDisabled |      | Boolean  |  false   | 禁用打开弹窗的按钮 |
|    needDrag     |      | Boolean  |   true   |    启用拖拽弹窗    |
|   needOpenBtn   |      | Boolean  |   true   |    启用打开按钮    |
|   needFooter    |      | Boolean  |   true   |  启用弹窗底部按钮  |
| submitDisabled  |      | Boolean  |  false   |    禁用提交按钮    |
|  appendToBody   |      | Boolean  |  false   |    弹窗是否嵌套    |
|   openBtnText   |      |  String  | 打开弹窗 |   打开按钮的文字   |
|  submitBtnText  |      |  String  |   提交   |   提交按钮的文字   |
|  cancelBtnText  |      |  String  |   取消   |   取消按钮的文字   |
|   openBtnSize   |      |  String  |  small   |   打开按钮的尺寸   |
|  otherBtnSize   |      |  String  |    ’‘    |   其他按钮的尺寸   |
|   openBtnType   |      |  String  |    ’‘    |   打开按钮的类型   |
|   openBtnIcon   |      |  String  |    ’‘    |   打开按钮的图标   |
|  openBtnStyle   |      |  Object  |    {}    |   打开按钮的样式   |
|   beforeOpen    |      | Function |  空操作  |    打开按钮之前    |

## 事件

|  名称  |     描述     |
| :----: | :----------: |
|  open  | 打开弹窗回调 |
| close  | 关闭弹窗回调 |
| submit | 启用拖拽弹窗 |

## 方法

可以通过直接调用组件方法

|  名称   |   描述   |
| :-----: | :------: |
| visible | 显示弹窗 |
| hidden  | 关闭弹窗 |
| submit  |   提交   |

## Author

> [Blog](https://4ark.me/) · GitHub [@gd4Ark](https://github.com/gd4Ark)

## Conclusion

If you think my project is good👏 . Give a Star⭐ encouragement.