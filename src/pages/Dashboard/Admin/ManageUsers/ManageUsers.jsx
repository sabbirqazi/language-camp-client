
import { useQuery } from "@tanstack/react-query";
import { FaChalkboardTeacher, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
const ManageUsers = () => {
 

   const { data: users = [], refetch } = useQuery(['users'], async () => {
    const res = await fetch('https://foreign-language-server.vercel.app/users');
    return res.json();
}) 
  const handleMakeAdmin = (user) => {
    fetch(`https://foreign-language-server.vercel.app/users/admin/${user._id}`, {
        method: 'PATCH'
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.modifiedCount){
            refetch();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${user.name} is an Admin Now!`,
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
  }
  const handleMakeInstructor = (user) => {
    fetch(`https://foreign-language-server.vercel.app/users/instructor/${user._id}`, {
        method: 'PATCH'
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.modifiedCount){
            refetch();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${user.name} is an Instructor Now!`,
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
  }
    return (
        <div className="w-[90%]">
       
        <h3 className="text-3xl font-semibold my-4">Total Users: {users.length}</h3>
        <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Make Admin</th>
                        <th>Make Instructor</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        users?.map((user, index) => <tr key={user._id}>
                            <th>{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td >{ user.role === 'admin' ? 'admin' :
                                <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-purple-600  text-white "><FaUserShield></FaUserShield></button> 
                                }</td>
                            <td>{user.role === 'instructor' ? 'instructor': <button onClick={() => handleMakeInstructor(user)} className="btn btn-ghost bg-blue-600  text-white "><FaChalkboardTeacher></FaChalkboardTeacher></button>}</td>
                        </tr>)
                    }
                    
                    
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default ManageUsers;