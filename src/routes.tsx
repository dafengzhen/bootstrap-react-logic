import { type ComponentType, createElement } from 'react';
import { createBrowserRouter, type RouteObject } from 'react-router-dom';
import App from '@src/App.tsx';
import ErrorPage from '@pages/error-page.tsx';
import IndexPage from '@pages/index-page.tsx';
import { toPascalCase } from '@src/tools';

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

const excludedPages = new Set(['error', 'index']);

const pageComponents: Record<string, { default: ComponentType }> = import.meta.glob('./pages/*-page.tsx', {
  eager: true,
});

const childrenRoutes = Object.entries(pageComponents)
  .map(([key, component]) => {
    const kebabKey = key.match(/\/pages\/(.*?)-page\.tsx$/)![1];
    if (excludedPages.has(kebabKey)) {
      return;
    }

    const pascalCaseKey = toPascalCase(kebabKey);
    return {
      path: MenuEnum[pascalCaseKey as keyof typeof MenuEnum],
      element: createElement(component.default),
    };
  })
  .filter(Boolean) as RouteObject[];

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
