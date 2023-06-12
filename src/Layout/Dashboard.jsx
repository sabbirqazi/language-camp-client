import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FaChalkboard, FaClipboardCheck, FaHistory, FaLaptop, FaPlusCircle, FaUserAlt } from 'react-icons/fa';
import { GrCheckboxSelected } from "react-icons/gr";
const Dashboard = () => {
  // TODO: load data from the server to have dynamic isAdmin and isInstructor based on Data
  // role based data 
  const [isInstructor, setIsInstructor] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const {user} =useAuth();
  useEffect(()=> {
    fetch(`https://foreign-language-server.vercel.app/users/instructor/${user.email}`)
    .then(res => res.json())
    .then(data => {setIsInstructor(data)})

  }, [user.email]);


  useEffect(()=> {
    fetch(`http://localhost:5000/users/admin/${user.email}`)
    .then(res => res.json())
    .then(data => {setIsAdmin(data)})

  }, [user.email])

  /* const isAdmin = false; */
/*   const isInstructor = true; */
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
      <div className="drawer-side bg-[#FFE194]">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80">
          {isAdmin?.admin ? (
            <>
              
              <li>
                <NavLink to="/dashboard/manageclasses"><FaLaptop></FaLaptop> Manage Classes</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageusers"> <FaUserAlt></FaUserAlt>Manage Users</NavLink>
              </li>
            </>
          ) : isInstructor?.instructor ? (
            <>
              <li>
                <NavLink to="/dashboard/instructorclasses"> <FaChalkboard></FaChalkboard>My Classes</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addclass"><FaPlusCircle></FaPlusCircle>Add Class</NavLink>
              </li>
            </>
          ) : (
            <>
            
              <li>
                <NavLink to="/dashboard/selectedclass"><GrCheckboxSelected></GrCheckboxSelected>Selected Class</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymenthistory"><FaHistory></FaHistory> Payment History</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/enrolledclass"><FaClipboardCheck></FaClipboardCheck>Enrolled Class</NavLink>
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
