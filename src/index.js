import * as React from 'react';
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import './index.css';
import Hcx1 from './components/Hcx1/Hcx1';
import Hcx2 from './components/Hcx2/Hcx2';
import Hcx3 from './components/Hcx3/Hcx3';
import Hcx4 from './components/Hcx4/Hcx4';
import { Login } from './components/Auth/login.component';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Hcx1 />
  },
  {
    path: '/Hcx2',
    element: <Hcx2 />
  },
  {
    path: '/Hcx3',
    element: <Hcx3 />
  },
  {
    path: '/Hcx4',
    element: <Hcx4 />
  },
  {
    path: '/login',
    element: <Login />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)