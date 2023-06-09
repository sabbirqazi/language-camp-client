import { useEffect, useState } from "react";
import ClassCard from "../../components/ClassCard";



const Classes = () => {
    const [classes, setClasses] = useState([]);
    useEffect(() => {
      fetch("http://localhost:5000/classes")
        .then((res) => res.json())
        .then((data) => {
          const popularClasses = data.filter((item) => item.availableSeats > 0);
          popularClasses.sort((a, b) => b.availableSeats - a.availableSeats);
          setClasses(popularClasses);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }, []);
     console.log(classes)
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

export default Classes;