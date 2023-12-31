import  { useEffect, useRef } from 'react'
import {HiOutlineMenuAlt3} from 'react-icons/hi'
import {FiLogOut} from 'react-icons/fi'


import MobileMenu from './MobileMenu';
import gsap from 'gsap';
import {Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Navbar = () => {
    const { user, logOut  } = useAuth();
    const refMobile = useRef(null);
    const handleLogOut = () => {
        logOut()
          .then()
          .catch((error) => console.log(error));
      };

    useEffect(() => {
        gsap.from(refMobile.current, {
            xPercent: -100,
        })
    }, [])

    const openMenu = () => {
        gsap.to(refMobile.current, {
            xPercent: 0,
            duration: 1.2,
            ease: 'power2.out'
        })
    }

    const closeMenu = () => {
        gsap.to(refMobile.current, {
            xPercent: -100,
            duration: 1.2,
            ease: 'power2.out'
        })
    }

  return (
    <div className=' bg-white  shadow-lg p-4  sticky top-0  z-30 '>
      <div className='container mx-auto flex flex-row justify-between items-center '>
        <a href='/' className='font-semibold text-2xl '>LangoCamp</a>
        <ul className='flex-row items-center gap-4 hidden md:flex text-2xl primary-text'>
        
            <li className='navmenu'>
              <NavLink
                to="/"
                aria-label="Home"
                title="Home"
              style={({ isActive }) =>
                  isActive
                    ? {
                        color: "#2356F6",
                        background: "",
                      }
                    : { color: "", background: "" }
                }
              >
                Home
              </NavLink>
            </li>

            <li className='navmenu'>
              <NavLink
                to="/instructors"
                aria-label="instructors"
                title="instructors"
                style={({ isActive }) =>
                isActive
                  ? {
                      color: "#2356F6",
                      background: "",
                    }
                  : { color: "", background: "" }
              }
              >
                Instructors
              </NavLink>
            </li>
            <li className='navmenu'>
              <NavLink
                to="/classes"
                aria-label="Classes"
                title="Classes"
                style={({ isActive }) =>
                isActive
                  ? {
                      color: "#2356F6",
                      background: "",
                    }
                  : { color: "", background: "" }
              }
              >
                Courses
              </NavLink>
            </li >
            {user && (
              <li className='navmenu'>
                <NavLink
                  to="/dashboard"
                  aria-label="Dashboard"
                  title="Dashboard"
                  style={({ isActive }) =>
                  isActive
                    ? {
                        color: "#2356F6",
                        background: "",
                      }
                    : { color: "", background: "" }
                }
                >Dashboard</NavLink>
              </li>
            )}
        </ul>
        <div className="md:flex items-center gap-2  hidden">
            
            {user && (
            <div
              className=""
              data-tip={user?.displayName}
             
            >
              <img
                className=" h-10 w-10 object-cover border-4 border-indigo-800 cursor-pointer rounded-full"
                src={user?.photoURL}
                alt={user?.displayName}
              />
            </div>
          )}
    
            <div className='text-xl '>
            {user ? (
            <Link
              onClick={handleLogOut}
              className=" px-5 py-2 flex gap-1 items-center rounded-full bg-[#2356F6]  hover:text-white duration-300"
            >
              <span>Logout</span> <FiLogOut className='h-5 w-5' /> </Link>
          ) : (
             <div className='flex items-center gap-2'>
                 <Link
              to={"/login"}
              className=" px-6 py-3 flex gap-1 items-center rounded-full  shadow-md   hover:bg-[#2356F6] hover:text-white duration-300"
            >
              Login
            </Link>
            <Link
              to={"/signup"}
              className=" px-6 py-3 flex gap-1 items-center rounded-full  shadow-md bg-[#2356F6]  text-white "
            >
              Signup <FiLogOut />
            </Link>
             </div>
          )}
       
            </div>
        
         
        </div>
        <HiOutlineMenuAlt3  className='text-primaryText text-4xl md:hidden' onClick={openMenu}/>

        <MobileMenu 
            ref = {refMobile}
            closeMenu = {closeMenu}
        />
</div>
    </div>
  
  )
}

export default Navbar