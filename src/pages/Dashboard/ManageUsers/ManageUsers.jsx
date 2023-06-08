import { useEffect, useState } from "react";

const ManageUsers = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      
  }, []);

    return (
        <div>
            <h1> user right now {users.length}</h1>
        </div>
    );
};

export default ManageUsers;