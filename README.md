# ti-UI
题库的UI组件，提取为依赖库并统一发布在npm

###案例

### 使用方法
1. 安装
```npm install --save @zhike/ti-ui```

2. 安装项目依赖，如已安装可跳过
- 基础框架 [React][1] :
```npm install --save react```
- CSS-in-JS 框架 [aphrodite][2] :
```npm install --save aphrodite```

2. 在页面使用需要的组件
```
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

[1]: https://github.com/facebook/react
[2]: https://github.com/Khan/aphrodite
