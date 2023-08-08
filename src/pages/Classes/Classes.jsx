import { useEffect, useState } from "react";
import ClassCard from "../../components/ClassCard";


//6ta card dekhabo
const Classes = () => {
    const [classes, setClasses] = useState([]);
    useEffect(() => {
      fetch("https://foreign-language-server.vercel.app/classes")
        .then((res) => res.json())
        .then((data) => {setClasses(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }, []);
     console.log(classes)
    return (
      <div className="my-20 mx-1 items-center justify-center">
          <h1 className="text-5xl font-bold text-center mb-10">Our Popular Classes</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 space-y-10 justify-center items-center">
          {classes?.map((classItem) => (
            <ClassCard key={classItem._id} classItem={classItem} />
          ))} 
         
        </div>
      </div>
    );
};

export default Classes;