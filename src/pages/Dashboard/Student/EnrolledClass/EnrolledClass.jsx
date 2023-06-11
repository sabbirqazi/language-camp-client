/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

const EnrolledClass = () => {
  const [enrolledClasses, setEnrolledClasses] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:5000/payments/enrolledclass')
      .then(res => res.json())
      .then(data => setEnrolledClasses(data));
  }, []);

  return (
    <div className="flex justify-center m-10">
      <div className="w-full grid grid-cols-3 gap-4">
        <h1 className="text-2xl font-bold mb-4 text-center col-span-full">
          Enrolled Class
        </h1>

        {enrolledClasses?.map((enrolled) => (
          <div key={enrolled._id} className="bg-white rounded shadow p-4">
            <img className="object-fit mb-4" src={enrolled.thumbnail} alt="" />
            <h2 className="text-lg font-bold mb-2">Course: {enrolled.name}</h2>
            <p className="text-sm mb-2 font-bold">Instructor: {enrolled.instructor}</p>
            <p className="text-sm font-bold">Price: ${enrolled.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnrolledClass;
