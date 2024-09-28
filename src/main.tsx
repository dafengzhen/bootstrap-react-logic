import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@assets/styles/main.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '@/App.tsx';
import ErrorPage from '@pages/error-page.tsx';
import ButtonPage from '@pages/button-page.tsx';
import IndexPage from '@pages/index-page.tsx';

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
