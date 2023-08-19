import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Root from "./component/root";
import MenuPhp from "./pages/menu-php";
import Variables from "./pages/variables";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "menu-php",
                element: <MenuPhp/>,
                children: [
                    {
                        path: "variables",
                        element: <Variables/>,
                    },
                ]
            },
            {
                path: "/menu-php-unit",
                element: <p>A venir</p>,
            },
            {
                path: "/menu-laravel",
                element: <p>A venir</p>,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(

    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>

);