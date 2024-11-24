import '@assets/styles/main.scss';
import '@src/i18n';
import { RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import router from '@src/routes.tsx';
import { StrictMode } from 'react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider
      future={{
        v7_startTransition: true,
      }}
      router={router}
    />
  </StrictMode>,
);
