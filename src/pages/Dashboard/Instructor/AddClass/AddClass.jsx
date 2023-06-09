
import { useForm } from 'react-hook-form';
import useAuth from '../../../../hooks/useAuth';
import Swal from 'sweetalert2';


const AddClass = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();

  const onSubmit = (data) => {
    fetch(`http://localhost:5000/addclasses`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
          
        if (result.acknowledged
          === true) {
          Swal.fire({
            title: "Success!",
            text: "Class Added Successfully",
            icon: "success",
            confirmButtonText: "Regard",
          });
        }
        
      });
      reset();
   
  };

  return (
    <div className="flex justify-center mt-8 w-full">
      <div className="max-w-md bg-white rounded shadow-lg p-6 w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">Add a Class</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="name" className="block">Class Name:</label>
            <input id="name" type="text" {...register('name', { required: true })} className="border border-gray-300 p-2 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block">Image URL:</label>
            <input id="image" type="text" {...register('image', { required: true })} className="border border-gray-300 p-2 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="instructorName" className="block">Instructor Name:</label>
            <input id="instructorName" type="text" {...register('instructorName', { required: true })} defaultValue={user.displayName} className="border border-gray-300 p-2 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block">Instructor Email:</label>
            <input id="email" type="email" {...register('email', { required: true })} defaultValue={user.email} className="border border-gray-300 p-2 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="availableSeats" className="block">Available seats:</label>
            <input id="availableSeats" type="number" {...register('availableSeats', { required: true })} className="border border-gray-300 p-2 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block">Price:</label>
            <input id="price" type="number" {...register('price', { required: true })} className="border border-gray-300 p-2 w-full" />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-8 py-2 rounded mx-auto block">Add Class</button>
        </form>
      </div>
    </div>
  );
};

export default AddClass;
