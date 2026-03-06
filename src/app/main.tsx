import { enableMocking } from '@/shared/api/mocks';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import './index.css';
import { router } from './router';

enableMocking().then(() => {
  createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  );
});
