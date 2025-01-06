import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import '@styles/index.css';
import RootLayout from '@components/templates/Root.tsx';
import { Provider } from 'react-redux';
import { store } from '@store/index.ts';
import Counter from '@components/atoms/Counter.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Posts from '@components/pages/Post.tsx';
import TodoList from '@components/organisms/TodoList';
import './i18n';
import { Toaster } from '@/components/ui/toaster';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <App /> },
      { path: 'counter', element: <Counter /> },
      { path: 'posts', element: <Posts /> },
      { path: 'todos', element: <TodoList /> },
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router} />
        <Toaster />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
);
