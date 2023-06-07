import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Instructors from "../pages/Instructors/Instructors";
import LoginLayout from "../Layout/LoginLayout";
import SignUp from "../pages/Login/SignUp";
import Login from "../pages/Login/Login";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
              },
            {
                path: "/instructors",
                element: <Instructors></Instructors>,
              },
            ]
      },
      {
        path: "/",
        element: <LoginLayout></LoginLayout>,
        children: [
          {
            path: "login",
            element: <Login></Login>,
          },
          {
            path: "signup",
            element: <SignUp></SignUp>,
          },
        ],
      }
])