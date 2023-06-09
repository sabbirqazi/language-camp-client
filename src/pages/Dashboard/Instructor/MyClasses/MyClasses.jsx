
//TODO : default vabe jakhon instructor post korbe tokhon status:'pending' hobe. jakhon admin ei sob class guloke pabe takhon admin chaile update er maddhome status ke pending theke approved kobe. jehe ekhn status change hoye geche tai ekhn status er upor find chaliye display korben.

import { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";

const MyClasses = () => {
    const [ myClasses, setMyClasses] = useState([]);
    const {user} = useAuth()
    const url = `http://localhost:5000/instructorclasses?email=${user?.email}`;
   
    //get the data using email for specific user
    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setMyClasses(data);
        });
    }, [user, url]);
    return (
        <div className="flex justify-center mt-8">
        <div className="max-w-4xl">
          <h2 className="text-2xl font-bold mb-4 text-center">My Classes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {myClasses?.map((myClass) => (
              <div key={myClass._id} className="bg-white rounded shadow-lg p-4">
                <img src={myClass.image} alt={myClass.name} className="mb-4 rounded-md" />
                <h3 className="text-xl font-semibold mb-2">{myClass.name}</h3>
                <p className="text-gray-600 mb-2">Instructor: {myClass.instructorName}</p>
                <p className="text-gray-600 mb-2">Email: {myClass.email}</p>
                <p className="text-gray-600 mb-2">Available Seats: {myClass.availableSeats}</p>
                <p className="text-gray-600 mb-2">Students: {myClass.students}</p>
                <p className="text-gray-600 mb-2">Price: ${myClass.price}</p>
                <button
                  className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md mt-4"
                  type="button"
                >
                  {myClass.status}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default MyClasses;