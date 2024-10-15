import { type ComponentType, createElement } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '@src/App.tsx';
import ErrorPage from '@pages/error-page.tsx';
import IndexPage from '@pages/index-page.tsx';
import { toKebabCase } from '@src/tools';

/**
 * Configure sidebar menu.
 */
export enum MenuEnum {
  Button = '/pages/button',
  ButtonGroup = '/pages/button-group',
  Input = '/pages/input',
  InputGroup = '/pages/input-group',
  Select = '/pages/select',
  Checkbox = '/pages/checkbox',
  Radio = '/pages/radio',
  Range = '/pages/range',
  FloatingLabel = '/pages/floating-label',
}

const excludedPages = ['error', 'index'];

const pageComponents: Record<string, { default: ComponentType }> = import.meta.glob('./pages/*-page.tsx', {
  eager: true,
});

const filteredPages = Object.fromEntries(
  Object.entries(pageComponents).filter(([key]) => !excludedPages.some((page) => key.includes(`/${page}-page`))),
);

const childrenRoutes = Object.keys(MenuEnum).map((key) => {
  const kebabKey = toKebabCase(key);
  const component = filteredPages[`./pages/${kebabKey}-page.tsx`];
  return {
    path: MenuEnum[key as keyof typeof MenuEnum],
    element: createElement(component.default),
  };
});

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          errorElement: <ErrorPage />,
          children: [{ index: true, element: <IndexPage /> }, ...childrenRoutes],
        },
      ],
    },
  ],
  {
    basename: __APP_PUBLIC_BASE_PATH__,
  },
);

export default router;
