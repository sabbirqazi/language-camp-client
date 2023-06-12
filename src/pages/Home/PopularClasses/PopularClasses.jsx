import { useEffect, useState } from "react";
import ClassCard from "../../../components/ClassCard";

const PopularClasses = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => {
        const popularClasses = data.filter((item) => item.availableSeats > 0);
        popularClasses.sort((a, b) => b.availableSeats - a.availableSeats);
        setClasses(popularClasses.slice(0, 6)); // Slicing the first six classes
      })
  }, []);

  return (
    <div className="my-16 lg:mx-16 home">
      <h1 className="text-5xl font-bold text-center my-16">Our Popular Classes</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 space-y-5 justify-center items-center">
        {classes?.map((classItem) => (
          <ClassCard key={classItem._id} classItem={classItem} />
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
