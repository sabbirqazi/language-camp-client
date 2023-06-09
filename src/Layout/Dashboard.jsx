import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  // TODO: load data from the server to have dynamic isAdmin and isInstructor based on Data
  const isAdmin = false;
  const isInstructor = false;
  return (
    <div className="drawer lg:drawer-open ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
        Open Dashboard
        </label>
      </div>
      <div className="drawer-side bg-sky-500">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/home"> Admin Home</NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/manageclass"> Manage Class</NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/manageusers">Manage Users</NavLink>
              </li>
            </>
          ) : isInstructor ? (
            <>
              <li>
                <NavLink to="/dashboard/addclass"> Add Class</NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/myclasses"> My Classes</NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/home"> Student Home</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/selectedclass">Selected Class</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history"> Payment History</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/enrolledclass">Enrolled Class</NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li>
            <NavLink to="/">Home</NavLink>{" "}
          </li>
          <li>
            <NavLink to="/classes">Classes</NavLink>
          </li>
          <li>
            <NavLink to="/instructors">Instructors</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
