import * as React from 'react';
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom'
import Hcx1 from '../Hcx1/hcx1';
import Hcx2 from '../Hcx2/hcx2';
import Hcx3 from '../Hcx3/hcx3';
import Hcx4 from '../Hcx4/hcx4';

const router = createBrowserRouter([
    {
        path: '/Hcx1',
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
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)