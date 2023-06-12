import { useEffect, useState } from 'react';

const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/users/instructor')
      .then(response => response.json())
      .then(data => setInstructors(data))
      .catch(error => console.error('Error fetching instructors:', error));
  }, []);

  return (
    <div className="my-20  lg:mx-16 mx-auto px-8">
      <h1 className="text-5xl font-bold text-center my-16">Our Popular Instructors</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 space-y-5 justify-center items-center">
        {instructors?.map((instructor) => (
          <div
            key={instructor?._id}
            className="card bg-white rounded-md shadow-md p-4 w-80 lg:w-96"
          >
            <img
              src={instructor.image}
              alt="Instructor"
              className="w-full h-auto mb-4"
            />
            <h2 className="text-lg font-semibold text-black">{instructor.name}</h2>
            <p className="text-gray-600 mb-2">Email: {instructor.email}</p>
            {/* <p className="text-sm text-gray-500">
              Number of Students: {instructor.NumberOfStudents}
            </p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
