import { useEffect, useState } from "react";


const ManageClasses = () => {
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
    return (
        <div>
            {
                classes.length
            }
        </div>
    );
};

export default ManageClasses;