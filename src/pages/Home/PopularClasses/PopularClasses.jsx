import { useEffect, useState } from "react";
import ClassCard from "../../../components/ClassCard";

const PopularClasses = () => {
  const [classes, setClasses] = useState([]);

  //TODO: classes will be shown using sort, if payment done enrollment will increase . sorting implemention has to be done according to enrollment
  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => {
        const popularClasses = data.filter((item) => item.availableSeats > 0);
        popularClasses.sort((a, b) => b.availableSeats - a.availableSeats);
        setClasses(popularClasses);
      })
  }, []);
/* slice 6ta */
  return (
    <div className="m-20">
        <h1 className="text-5xl font-bold text-center mb-10">Our Popular Classes</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 justify-center items-center">
        {classes?.map((classItem) => (
          <ClassCard key={classItem._id} classItem={classItem} />
        ))} 
       
      </div>
    </div>
  );
};

export default PopularClasses;
