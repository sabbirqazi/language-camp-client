/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const ClassCard = ({ classItem }) => {

  const {user} = useAuth();
  const navigate = useNavigate();

  const handleSelectCourse = (classItem) => {
    console.log(classItem)
    if (user) {
      // User is logged in, perform the desired action
      // Pass the classItem.id to the API call or perform any other logic
      const saveMyClass = { userName: user.displayName, email: user.email, courseName: classItem.name, instructor: classItem.instructorName, thumbnail:classItem.image, seats: classItem.availableSeats, price: classItem.price, classId: classItem._id };
          fetch("http://localhost:5000/postmyclass", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveMyClass),
          })
   
    } else {
      // User is not logged in, redirect to the login page
      navigate("/login");
    }
  };

  return (
    <div className="mx-auto px-4">
      <div className="bg-white rounded-md shadow-md p-4 w-96">
        <img 
          src={classItem.image}
          alt={classItem.name}
          className="w-full h-40 object-cover rounded-md"
        />
        <h2 className="text-lg font-semibold mt-2">{classItem.name}</h2>
        <p className="text-gray-600">Instructor: {classItem.instructorName}</p>
        <p className="text-gray-600">Available seats: {classItem.availableSeats}</p>
        <p className="text-gray-600">Price: {classItem.price}</p>
        <div className="flex justify-center mt-4">
          {/* button disabled if seat 0  */}
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => handleSelectCourse(classItem)}>
            Select Course
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
