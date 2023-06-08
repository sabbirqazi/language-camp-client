/* eslint-disable react/prop-types */


const ClassCard = ({ classItem }) => {
  console.log(classItem);
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
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Select Course
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
