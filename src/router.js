import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Root from "./component/root";
import MenuPhp from "./pages/menu-php";
import Variables from "./pages/variables";
import Chaines from "./pages/chaines";
import Operations from "./pages/operations";
import Conditions from "./pages/conditions";
import Tableaux from "./pages/tableaux";
import Boucles from "./pages/boucles";
import Fonctions from "./pages/fonctions";
import Classes from "./pages/classes";
import Heritage from "./pages/heritage";
import Interfaces from "./pages/interfaces";
import Exceptions from "./pages/exceptions";


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
                    {
                        path: "chaines",
                        element: <Chaines/>,
                    },
                    {
                        path: "operations",
                        element: <Operations/>,
                    },
                    {
                        path: "conditions",
                        element: <Conditions/>,
                    },
                    {
                        path: "tableaux",
                        element: <Tableaux/>,
                    },
                    {
                        path: "boucles",
                        element: <Boucles/>,
                    },
                    {
                        path: "fonctions",
                        element: <Fonctions/>,
                    },
                    {
                        path: "classes",
                        element: <Classes/>,
                    },
                    {
                        path: "heritage",
                        element: <Heritage/>,
                    },
                    {
                        path: "interfaces",
                        element: <Interfaces/>,
                    },
                    {
                        path: "exceptions",
                        element: <Exceptions/>,
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