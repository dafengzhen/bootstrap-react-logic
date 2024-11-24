# Bootstrap React Logic

BRL is a React component library integrated with [Bootstrap](https://getbootstrap.com), offering a set of components and
utilities to help developers build user interfaces in [React](https://react.dev) applications, enhancing development
efficiency.

[简体中文](./README.zh.md)

## Features

- **Bootstrap Integration**: Consistent with Bootstrap UI elements, ensuring unified appearance and behavior.
- **Built with React**: Components are built using React, following React development patterns, making them easy to
  integrate and maintain.

## Installation

Before installation, ensure that **Bootstrap** is already installed in your project. You can install it via npm:

```bash
npm install bootstrap-react-logic
```

## Usage

Import Bootstrap styles: To ensure BRL components are styled correctly, first import the global CSS file:

```js
import 'bootstrap-react-logic/dist-lib/bootstrap-react-logic.css';
```

Import and use BRL components: Now you can use the components provided by BRL just like any other React component. For
example, to use the Button component:

```jsx
import { Button } from 'bootstrap-react-logic';

<Button variant="primary">Primary</Button>;
```

## Available Components

For more examples and complete component documentation, please refer to
the [documentation](https://dafengzhen.github.io/bootstrap-react-logic).

## License

[MIT](https://opensource.org/licenses/MIT)
