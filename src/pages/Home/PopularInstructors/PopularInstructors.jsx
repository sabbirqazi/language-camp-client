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
    <div className="m-20">
      <h1 className="text-5xl font-bold text-center mb-10">Our Popular Instructors</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {instructors?.map((instructor) => (
          <div
            key={instructor?._id}
            className="bg-white rounded-lg shadow-lg p-4"
          >
            <img
              src={instructor.image}
              alt="Instructor"
              className="w-full h-auto mb-4"
            />
            <h2 className="text-lg font-semibold">{instructor.name}</h2>
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
