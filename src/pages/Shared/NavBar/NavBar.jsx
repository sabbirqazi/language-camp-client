/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
/* import { AuthContext } from "../providers/AuthProvider"; */
/* import logo from "../../assets/logo.svg"; */

const NavBar = () => {
  /* const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  }; */
  return (
    <>
      <div className="navbar bg-[#E0F4F5] shadow-2xl">
        <div className="navbar-start lg:ml-20">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 space-y-2"
            >
              <li>
                <NavLink
                  to="/"
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "#fff",
                          background: "#015366",
                        }
                      : { color: "#212A3E", background: "#E0F4F5" }
                  }
                  aria-label="Home"
                  title="Home"
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/instructors"
                  aria-label="instructors"
                  title="instructors"
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "#fff",
                          background: "#015366",
                        }
                      : { color: "#212A3E", background: "#E0F4F5" }
                  }
                >
                 Instructors
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/classes"
                  aria-label="Classes"
                  title="Classes"
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "#fff",
                          background: "#015366",
                        }
                      : { color: "#212A3E", background: "#E0F4F5" }
                  }
                >
                 Classes
                </NavLink>
              </li>

             {/*  {user && (
                  <li>
                  <NavLink
                    to="/Dashboard"
                    aria-label="Dashboard"
                    title="Dashboard"
                    style={({ isActive }) =>
                      isActive
                        ? {
                            color: "#fff",
                            background: "#015366",
                          }
                        : { color: "#212A3E", background: "#E0F4F5" }
                    }
                  >
                   

                  </NavLink>
                </li>
                
              )} */}
            </ul>
          </div>
          <Link
            to="/"
            className="hidden lg:flex justify-center items-center normal-case text-xl text-[#015366]"
          >
           {/*  <span className="mr-1">
              <img className="w-10 h-10" src='' alt="logo" />{" "}
            </span>{" "} */}
            <span>
             LangoCamp
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                aria-label="Home"
                title="Home"
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: "#fff",
                        background: "#015366",
                      }
                    : { color: "#212A3E", background: "#E0F4F5" }
                }
              >
                Home
              </NavLink>
            </li>

            <li>
                <NavLink
                  to="/instructors"
                  aria-label="instructors"
                  title="instructors"
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "#fff",
                          background: "#015366",
                        }
                      : { color: "#212A3E", background: "#E0F4F5" }
                  }
                >
                 Instructors
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/classes"
                  aria-label="Classes"
                  title="Classes"
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "#fff",
                          background: "#015366",
                        }
                      : { color: "#212A3E", background: "#E0F4F5" }
                  }
                >
                 Classes
                </NavLink>
              </li>
           {/*  {user && (
              
                {" "}
                <li>
                  <NavLink
                    to="/Dashboard"
                    aria-label="Dashboard"
                    title="Dashboard"
                    style={({ isActive }) =>
                      isActive
                        ? {
                            color: "#fff",
                            background: "#015366",
                          }
                        : { color: "#212A3E", background: "#E0F4F5" }
                    }
                  >
                   

                  </NavLink>
                </li>
               
            
            )} */}
          </ul>
        </div>
        <div className="navbar-end  lg:mr-20">
        {/*   {user && (
            <div
              className="tooltip tooltip-left rounded-full border-2 border-red-100 w-8 mr-4"
              data-tip={user?.displayName}
            >
              <img
                className="cursor-pointer rounded-full"
                src={user?.photoURL}
                alt={user?.displayName}
              />
            </div>
          )}
          {user ? (
            <Link
              onClick={handleLogOut}
              className="px-4 py-3 rounded-md text-[#fff] bg-[#015366] text-[#fff]"
            >
              Logout
            </Link>
          ) : (
            <Link
              to={"/login"}
              className="px-4 py-3 rounded-md text-[#fff] bg-[#015366] text-[#fff]"
            >
              Login
            </Link>
          )} */}
        </div>
      </div>
    </>
  );
};

export default NavBar;