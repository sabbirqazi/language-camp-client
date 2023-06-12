import { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';

const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/users/instructor')
      .then(response => response.json())
      .then(data => setInstructors(data))
      .catch(error => console.error('Error fetching instructors:', error));
  }, []);

  return (
    <div className="my-16  lg:mx-16 mx-auto px-8">
      <h1 className="text-5xl font-bold text-center my-16">Our Popular Instructors</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 space-y-5 justify-center items-center">
        {instructors?.map((instructor) => (
          <div
            key={instructor?._id}
            className="card bg-[#F6F1F1] rounded-md shadow-md p-4 w-80 lg:w-96"
          >
            <img
              src={instructor.image}
              alt="Instructor"
              className="w-full object-fit mb-4"
            />
            <h2 className="text-lg font-semibold text-black">{instructor.name}</h2>
            <p className="text-gray-600 mb-2">Email: {instructor.email}</p>
            <div className='flex items-center gap-1'><span className='mr-2'>Rating:</span> <FaStar className='text-yellow-500'></FaStar>  <FaStar className='text-yellow-500'></FaStar><FaStar className='text-yellow-500'></FaStar><FaStar className='text-yellow-500'></FaStar></div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
