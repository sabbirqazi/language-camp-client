/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Swal from "sweetalert2";

const ManageClasses = () => {


  const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);
  const [feedbackText, setFeedbackText] = useState("");
  const [selectedClassId, setSelectedClassId] = useState("");


  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await fetch("http://localhost:5000/classes");
    return res.json();
  });

  const handleApprove = (classItem) => {
    fetch(
      `http://localhost:5000/classes/manageclasses/approve/${classItem._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${classItem.name} is Approved!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    console.log(`Approve class ${classItem}`);
  };

  const handleDeny = (classItem) => {
    // Handle deny logic
    fetch(`http://localhost:5000/classes/manageclasses/deny/${classItem._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${classItem.name} is Denied!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    console.log(`Deny class ${classItem}`);
  };

  const handleSendFeedback = (classItem) => {
    setSelectedClassId(classItem._id);
    setFeedbackModalOpen(true);
  };
  const handleSubmitFeedback = () => {
    const classesItem = classes.find((item) => item._id === selectedClassId);
    fetch(`http://localhost:5000/classes/manageclasses/deny/${classesItem._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({feedbackText}),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `feedback send for ${classesItem.name} !`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    setFeedbackModalOpen(false);
    setFeedbackText("");
  };

  return (
    <div className="flex justify-center mt-8">
      <div className="w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">Classes</h2>
        <table className="table text-sm table-zebra w-full p-4">
          <thead>
            <tr>
              <th className=" text-lg py-2 px-4 border-b">#</th>
              <th className=" text-lg py-2 px-4 border-b">Name</th>
              <th className=" text-lg py-2 px-4 border-b">Image</th>
              <th className=" text-lg py-2 px-4 border-b">Email</th>
              <th className=" text-lg py-2 px-4 border-b">Seats</th>
              <th className=" text-lg py-2 px-4 border-b">Price</th>
              <th className=" text-lg py-2 px-4 border-b">Status</th>
              <th className=" text-lg py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
          
            {classes?.map((classItem, index) => (
              <tr key={classItem._id}>
                <td className="py-2 px-4 border-b">{index + 1}</td>
                <td className="py-2 px-4 border-b">{classItem.name}</td>
                <td className="py-2 px-4 border-b">
                  <img
                    src={classItem.image}
                    alt={classItem.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                </td>
                <td className="py-2 px-4 border-b">{classItem.email}</td>
                <td className="py-2 px-4 border-b">{classItem.seats}</td>
                <td className="py-2 px-4 border-b">${classItem.price}</td>
                <td className="py-2 px-4 border-b">{classItem.status}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded"
                    onClick={() => handleApprove(classItem)}
                    disabled={classItem.status !== "pending"}
                  >
                    Approve
                  </button>
                </td>
                <td className="py-2 px-4 border-b">
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded"
                    onClick={() => handleDeny(classItem)}
                    disabled={classItem.status !== "pending"}
                  >
                    Deny
                  </button>
                </td>
                <td className="py-2 px-4 border-b">
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={() => handleSendFeedback(classItem)}
                    disabled={classItem.status !== "denied"}
                  >
                    Send Feedback
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {feedbackModalOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white rounded-lg p-6 max-w-sm">
            <h2 className="text-xl font-bold mb-4">Send Feedback</h2>
            <textarea
              className="w-full h-32 border border-gray-300 p-2 mb-4"
              placeholder="Enter your feedback here"
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
            ></textarea>
            <div className="flex justify-end">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                onClick={handleSubmitFeedback}
              >
                Submit
              </button>
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
                onClick={() => setFeedbackModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageClasses;
