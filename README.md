# ti-UI
题库的UI组件，提取为依赖库并统一发布在npm

## demo

```bash
npm install
npm run storybook
open http://localhost:3001/
```

## 使用指南

### 安装

```bash
npm install --save @zhike/ti-ui
```

### 安装项目依赖，如已安装可跳过

*  基础框架 [React][1] :
```bash
npm install --save react
```
*  CSS-in-JS 框架 [aphrodite][2] :
```bash
npm install --save aphrodite
```

#### 如果需要使用 Scrollbar的话
*  react-custom-scrollbars 框架 [scrollbars][3] :
```bash
npm install --save react-custom-scrollbars
```
### 在页面使用需要的组件

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

## 开发指南

1. 修改`package.json`文件的版本号
2. 打包到`lib`文件夹并发布

```bash
npm run build
npm publish
```

## API

### Button

|propName     |required|type  |default  |option            |
|:-----------:|:------:|:----:|:-------:|------------------|
|text         |true    |string|         |                  |
|className    |        |      |undefined|                  |
|textClassName|        |      |undefined|                  |
|leftIcon     |        |      |undefined|                  |
|rightIcon    |        |      |undefined|                  |
|theme        |        |string|''       |'darken', 'hollow'|
|onClick      |        |func  |undefined|                  |
|isAvailable  |        |bool  |true     |                  |

### Icon

|propName   |required|type  |default  |option|
|:---------:|:------:|:----:|:-------:|------|
|width      |        |string|14       |      |
|height     |        |string|14       |      |
|marginLeft |        |string|0        |      |
|marginRight|        |string|0        |      |
|source     |        |string|''       |      |

### Image

|propName   |required|type  |default  |option|
|:---------:|:------:|:----:|:-------:|------|
|className  |        |      |undefined|      |

注：支持 img 标签原生属性

### Input

|propName   |required|type  |default  |option|
|:---------:|:------:|:----:|:-------:|------|
|className  |        |      |undefined|      |

注：支持 input 标签原生属性

### Textarea

|propName   |required|type  |default  |option|
|:---------:|:------:|:----:|:-------:|------|
|className  |        |      |undefined|      |

注：支持 textarea 标签原生属性

### View

|propName   |required|type  |default  |option|
|:---------:|:------:|:----:|:-------:|------|
|className  |        |      |undefined|      |

注：支持 div 标签原生属性

### Scorllbar 

|propName   |required|type  |default  |option|
|:---------:|:------:|:----:|:-------:|------|
|className  |        |   object   |undefined|      |
|width  |        |string|'100%'|      |
|height  |        |string|'100%'|      |

[1]: https://github.com/facebook/react
[2]: https://github.com/Khan/aphrodite
[3]: https://github.com/malte-wessel/react-custom-scrollbars