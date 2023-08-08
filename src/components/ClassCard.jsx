/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { LuBookmarkPlus } from "react-icons/lu";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const ClassCard = ({ classItem }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSelectCourse = (classItem) => {
    console.log(classItem);
    if (user) {
      // User is logged in, perform the desired action
      // Pass the classItem.id to the API call or perform any other logic
      const saveMyClass = {
        userName: user.displayName,
        email: user.email,
        courseName: classItem.name,
        instructor: classItem.instructorName,
        thumbnail: classItem.image,
        seats: classItem.availableSeats,
        price: classItem.price,
        classId: classItem._id,
      };
      fetch("https://foreign-language-server.vercel.app/postmyclass", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveMyClass),
      });
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Class added to Selected Class successfully.",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      // User is not logged in, redirect to the login page
      navigate("/login");
    }
  };

  return (
    <div className="mx-auto px-4">
      <motion.div
        whileHover={{ scale: 1.1 }}
        onHoverStart={(e) => {}}
        onHoverEnd={(e) => {}}
        className="bg-slate-700 hover:bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md shadow-md p-5 lg:py-[8] w-[355px] lg:w-[550px] flex transition-colors duration-300"
      >
        <div className="flex-shrink-0">
          <img
            src={classItem.image}
            alt={classItem.name}
            className="w-44 h-44 object-cover rounded-md"
          />
        </div>
        <div className="ml-5">
          <p className="font-semibold text-md hover:text-white text-red-500">
            {" "}
            ${classItem.price}
          </p>
          <h2 className="text-lg font-semibold mt-2 text-white">
            {classItem.name}
          </h2>
          <p className="text-white font-semibold mt-2">
            {classItem.instructorName}
          </p>
          <p className="text-white font-semibold mt-2">
            Available seats: {classItem.availableSeats}
          </p>
          <button
            className="bg-orange-500 text-white p-3 mt-2 rounded-full"
            alt="Select"
            onClick={() => handleSelectCourse(classItem)}
          >
            <span>
              <LuBookmarkPlus className="h-5 w-5"></LuBookmarkPlus>
            </span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ClassCard;
