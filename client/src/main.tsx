import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import App from './App.tsx';
import { store } from './App/store';
import Header from './components/header/Header.tsx';
import './index.css';
import Main from './scenes/Main.tsx';

const Root = () => {
  return (
    <>
      <Header />
    </>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Root />}>
      <Route path="/" element={<Main />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Provider store={store}>
        <App />
      </Provider>
    </RouterProvider>
  </React.StrictMode>
);
