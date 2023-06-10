import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Instructors from "../pages/Instructors/Instructors";
import LoginLayout from "../Layout/LoginLayout";
import SignUp from "../pages/Login/SignUp";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers/ManageUsers";
import AddClass from "../pages/Dashboard/Instructor/AddClass/AddClass";
import Classes from "../pages/Classes/Classes";
import SelectedClass from "../pages/Dashboard/Student/SelectedClass/SelectedClass";
import MyClasses from "../pages/Dashboard/Instructor/MyClasses/MyClasses";
import ManageClasses from "../pages/Dashboard/Admin/ManageClasses/ManageClasses";
import Payment from "../pages/Dashboard/Student/Payment/Payment";




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
            {
                path: "/classes",
                element: <Classes></Classes>,
              },
            ]
      },
      {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>, 
        children: [
          {
            path: 'manageusers', 
            element: <ManageUsers></ManageUsers>
          },
          {
            path: 'manageclasses', 
            element: <ManageClasses></ManageClasses>
          },
          //instructor
          {
            path: 'addclass', 
            element: <AddClass></AddClass>
          },
          {
            path: 'instructorclasses', 
            element: <MyClasses></MyClasses>
          },

          //user dashboard
          {
            path: 'selectedclass', 
            element: <SelectedClass></SelectedClass>
          },
          {
            path: 'payment/:courseId', 
            element: <Payment></Payment>
          },
        
        ]
      },
      {
        path: "/",
        element: <LoginLayout></LoginLayout>,
        children: [
          {
            path: "login",
            element: <Login></Login>
          },
          {
            path: "signup",
            element: <SignUp></SignUp>,
          },
        ],
      }
])