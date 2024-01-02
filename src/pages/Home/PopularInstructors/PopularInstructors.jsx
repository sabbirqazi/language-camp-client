import { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';

const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch('https://foreign-language-server.vercel.app/users/instructor')
      .then(response => response.json())
      .then(data => setInstructors(data))
      .catch(error => console.error('Error fetching instructors:', error));
  }, []);

  return (
    <div className="mx-auto px-5 my-12  lg:my-24">
      <div className='flex flex-col justify-center items-center gap-5'>
      <h1 className="text-5xl font-bold text-center my-16">Our Popular Instructors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-20">
        {instructors?.map((instructor) => (
          <div
            key={instructor?._id}
            className="w-[370px] h-[527px] bg-white hover:bg-[#1AB69D] hover:text-white duration-300 shadow-md p-5 flex flex-col gap-3"
          >
   
         <img
              src={instructor.image}
              alt="Instructor"
              className="w-80 h-80"
            />
            <h2 className="text-lg font-semibold text-black">{instructor.name}</h2>
            <p className="text-gray-600 mb-2">Email: {instructor.email}</p>
            <p>Students: 300</p>
            <div className='flex items-center gap-1'><span className='mr-2'>Rating:</span> <FaStar className='text-yellow-500'></FaStar>  <FaStar className='text-yellow-500'></FaStar><FaStar className='text-yellow-500'></FaStar><FaStar className='text-yellow-500'></FaStar></div>
         </div>

        
        ))}
      </div>
      </div>
     
    </div>
  );
};

export default PopularInstructors;
