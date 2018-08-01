# ti-UI
题库的UI组件，提取为依赖库并统一发布在npm

## demo

```bash
cd examples
npm install
npm start
open http://localhost:3000/
```

## 安装

```bash
npm install --save @zhike/ti-ui
```

## 安装项目依赖，如已安装可跳过

*  基础框架 [React][1] :
```bash
npm install --save react
```
*  CSS-in-JS 框架 [aphrodite][2] :
```bash
npm install --save aphrodite
```

## 在页面使用需要的组件

```javascript
import React from 'react'
import { Button } form '@zhike/ti-ui'

class MyComponent extends React.Component {
  render(
    return (
      <Button text="按钮"></Button>
    )
  )
}

export default MyComponent
```

## API

* button

|propName     |required|type    |default  |
|:-----------:|:------:|:------:|:-------:|
|text         |true    |string  |         |
|className    |        |        |undefined|
|textClassName|        |        |undefined|
|leftIcon     |        |        |undefined|
|rightIcon    |        |        |undefined|
|theme        |        |string  |''       |
|onClick      |        |function|undefined|
|isAvailable  |        |boolean |true     |

* icon
* image
* input
* textarea
* view

[1]: https://github.com/facebook/react
[2]: https://github.com/Khan/aphrodite
