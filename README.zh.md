# Bootstrap React Logic

BRL 是一个与 [Bootstrap](https://getbootstrap.com) 集成的 React
组件库，提供了一系列组件和工具，帮助开发者在 [React](https://react.dev) 应用中构建用户界面，提升开发效率

[English](./README.md)

## 特性

- **与 Bootstrap 集成**：与 Bootstrap UI 元素一致，确保外观和行为统一
- **使用 React 实现**：基于 React 构建组件逻辑，符合 React 开发模式，易于集成和维护

## 安装

在安装之前，请确保 **Bootstrap** 已经安装到项目中。你可以通过 npm 安装：

```bash
npm install bootstrap-react-logic
```

## 使用方法

导入 Bootstrap 样式：为了确保 BRL 组件样式正确显示，首先导入全局 CSS 文件：

```js
import 'bootstrap-react-logic/dist-lib/bootstrap-react-logic.css';
```

导入并使用 BRL 组件：现在你可以像使用普通 React 组件一样使用 BRL 提供的组件。例如，使用按钮组件：

```jsx
import { Button } from 'bootstrap-react-logic';

<Button variant="primary">Primary</Button>;
```

## 可用组件

更多示例和完整组件文档，请[参考文档](https://dafengzhen.github.io/bootstrap-react-logic)

## License

[MIT](https://opensource.org/licenses/MIT)
