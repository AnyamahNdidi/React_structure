
import React, { Children, lazy } from "react"
import { createBrowserRouter } from "react-router-dom"
import { Weblayout } from "../layouts"
import {Errorboundary} from "../utils"


const Home = lazy(() => import("../Pages/Home"))
const SignUp = lazy(() => import("../Pages/SignUp"))
const About  =  lazy(() => import("../Pages/About"))

const index = createBrowserRouter([

    {
        path: "/",
        element:<Weblayout/>,
        children: [
            {
                index: true,
                  element: <Home />
            },
            {
                path: "about",
                element: <About />
               
            }
        ],
        errorElement: <Errorboundary />,
        hasErrorBoundary: true,
    },
    {
        path: "/sign",
        element: <SignUp />,
        errorElement: <Errorboundary />,
        hasErrorBoundary:true,
    }
])
export default index