import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from './Provider/AuthProvider.jsx';
import routes from './Routes/Routes.jsx';
import './index.css';
// Create a client
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <RouterProvider router={routes} />
    </AuthProvider>
    <Toaster />
  </QueryClientProvider>,
)
