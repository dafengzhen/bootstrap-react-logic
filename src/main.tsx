import '@assets/styles/main.scss';
import '@src/i18n';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '@src/App.tsx';
import ErrorPage from '@pages/error-page.tsx';
import ButtonPage from '@pages/button-page.tsx';
import IndexPage from '@pages/index-page.tsx';
import ButtonGroupPage from '@pages/button-group-page.tsx';
import InputPage from '@pages/input-page.tsx';
import InputGroupPage from '@pages/input-group-page.tsx';
import SelectPage from '@pages/select-page.tsx';
import CheckboxPage from '@pages/checkbox-page.tsx';
import RadioPage from '@pages/radio-page.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <IndexPage /> },
          {
            path: 'pages/button',
            element: <ButtonPage />,
          },
          {
            path: 'pages/button-group',
            element: <ButtonGroupPage />,
          },
          {
            path: 'pages/input',
            element: <InputPage />,
          },
          {
            path: 'pages/input-group',
            element: <InputGroupPage />,
          },
          {
            path: 'pages/select',
            element: <SelectPage />,
          },
          {
            path: 'pages/checkbox',
            element: <CheckboxPage />,
          },
          {
            path: 'pages/radio',
            element: <RadioPage />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
