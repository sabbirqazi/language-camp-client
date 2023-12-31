import { forwardRef } from "react";
import PropTypes from "prop-types";
import { IoMdClose } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FiLogOut } from "react-icons/fi";

const MobileMenu = forwardRef(function MobileMenu(props, ref) {
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  return (
    <div
      className="h-[65%] w-[65%] bg-cyan-200 absolute top-0 left-0 z-20 md:hidden rounded-l-md rounded-r-md"
      ref={ref}
    >
      <ul className="flex flex-col items-center gap-6 text-indigo-800 w-full h-full justify-center text-2xl">
        <li className="navmenu">
          <NavLink
            to="/"
            aria-label="Home"
            title="Home"
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#3730a3",
                    background: "",
                  }
                : { color: "", background: "" }
            }
          >
            Home
          </NavLink>
        </li>

        <li className="navmenu">
          <NavLink
            to="/instructors"
            aria-label="instructors"
            title="instructors"
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#000080",
                    background: "",
                  }
                : { color: "", background: "" }
            }
          >
            Instructors
          </NavLink>
        </li>
        <li className="navmenu">
          <NavLink
            to="/classes"
            aria-label="Classes"
            title="Classes"
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#000080",
                    background: "",
                  }
                : { color: "", background: "" }
            }
          >
            Courses
          </NavLink>
        </li>
        {user && (
          <li className="navmenu">
            <NavLink
              to="/dashboard"
              aria-label="Dashboard"
              title="Dashboard"
              style={({ isActive }) =>
                isActive
                  ? {
                      color: "#000080",
                      background: "",
                    }
                  : { color: "", background: "" }
              }
            >
              Dashboard
            </NavLink>
          </li>
        )}

        <div className="flex flex-col items-center gap-5 ">
          {user && (
            <div className="" data-tip={user?.displayName}>
              <img
                className=" h-10 w-10 object-cover border-4 border-indigo-800 cursor-pointer rounded-full"
                src={user?.photoURL}
                alt={user?.displayName}
              />
            </div>
          )}

          <div className="text-xl">
            {user ? (
              <Link
                onClick={handleLogOut}
                className=" px-5 py-2 flex gap-1 items-center rounded-full  border-[2px] border-gray-950  hover:bg-indigo-800 hover:text-white duration-300"
              >
                <span>Logout</span> <FiLogOut className="h-5 w-5" />{" "}
              </Link>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  to={"/login"}
                  className=" px-5 py-2 flex gap-1 items-center rounded-full  border-[2px] border-gray-950  hover:bg-indigo-800 hover:text-white duration-300"
                >
                  Login
                </Link>
                <Link
                  to={"/signup"}
                  className=" px-5 py-2 flex gap-1 items-center rounded-full  border-[2px] border-gray-950  hover:bg-indigo-800 hover:text-white duration-300"
                >
                  Signup
                </Link>
              </div>
            )}
          </div>
        </div>
      </ul>
      <IoMdClose
        className="text-black absolute top-5 left-4 text-3xl"
        onClick={props.closeMenu}
      />
    </div>
  );
});

MobileMenu.propTypes = {
  closeMenu: PropTypes.func.isRequired,
};

export default MobileMenu;
