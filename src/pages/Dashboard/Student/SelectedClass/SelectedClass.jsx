/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import { FaMoneyBill  } from "react-icons/fa";

const SelectedClass = () => {
    const { user } = useAuth();
    const [selectedClass, setSelectedClass] = useState([]);
    const {_id} = selectedClass;
    const url = `http://localhost:5000/myclasses?email=${user?.email}`;
    /*  const [control, setControl] = useState(false); */
    //get the data using email for specific user
    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setSelectedClass(data);
        });
    }, [user,url]);
    const handlePayment = () => {
        console.log('yes')
    }
    return (
        <div className="w-[90%]">
       
        <h3 className="text-3xl font-semibold my-4">Total Selected Class: {selectedClass.length}</h3>
        <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Course</th>
                        <th>Price</th>
                        <th>Payment</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        selectedClass.map((course, index) => <tr key={course._id}>
                            <th>{index + 1}</th>
                            <td>{course.courseName}</td>
                            <td>{course.price}</td>
                            <td onClick={() => handlePayment(course)} className="btn bg-teal-600  text-white "><FaMoneyBill className="h-5 w-5"></FaMoneyBill> </td>
                        </tr>)
                    }
                    
                    
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default SelectedClass;