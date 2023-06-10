/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import { FaMoneyBill, FaRemoveFormat, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const SelectedClass = () => {
  const { user } = useAuth();
  const [selectedClass, setSelectedClass] = useState([]);

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
  }, [user, url]);
  const { _id } = selectedClass;
  const handlePayment = () => {
    console.log("yes");
  };

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/myclasses/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Toy has been deleted.", "success");
              const remaining = selectedClass.filter(
                (course) => course._id !== _id
              );
              setSelectedClass(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="w-[90%]">
  <h3 className="text-3xl font-semibold my-4">
    Total Selected Class: {selectedClass.length}
  </h3>
  <div className="overflow-x-auto">
    <table className="table table-zebra w-full">
      {/* head */}
      <thead>
        <tr>
          <th>#</th>
          <th>Course</th>
          <th>Price</th>
          <th>Delete</th>
          <th>Payment</th>
        </tr>
      </thead>
      <tbody>
        {selectedClass?.map((course, index) => (
          <tr key={course._id}>
            <td>{index + 1}</td>
            <td>{course.courseName}</td>
            <td>${course.price}</td>
            <td className="space-x-2">
              <button
                onClick={() => handleDelete(course._id)}
                className="btn btn-ghost bg-teal-600 text-white"
              >
                <FaTrashAlt />
              </button>
            </td>
            <td>
           <Link to={`/dashboard/payment/${course._id}`}>
           <button
                onClick={() => handlePayment(course)}
                className="btn btn-ghost bg-teal-600 text-white"
              >
                <FaMoneyBill className="" />
              </button>
           </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

  );
};

export default SelectedClass;
