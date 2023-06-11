/* eslint-disable no-undef */

import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import SocialLogin from "./SocialLogin";
import Swal from "sweetalert2";

const Login = () => {
  const { loginUser, setLoading } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const onSubmit = (data) => {
    loginUser(data.email, data.password)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setLoading()
        if(loggedInUser){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User logged in successfully.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setErrorMessage(error.message);
      });
    reset();
  };

  return (
    <div className="mt-10">
      <div className="">
        <div className="flex justify-center gap-10">
          <div>
            <img
              src="https://i.ibb.co/2ndWspf/pngtree-online-registration-or-sign-up-login-for-account-on-smartphone-app-png-image-4740849.png"
              alt=""
              className="mt-10"
            />
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <h2 className="text-2xl font-bold mb-4">Log In</h2>
            {errorMessage && (
              <p className="text-red-500 text-sm mb-4">
                <span className="font-bold">Error:</span> {errorMessage}
              </p>
            )}
            {errors.email && (
              <p className="text-red-500 text-sm mb-4">
                <span className="font-bold">Error:</span> Email is required
              </p>
            )}
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email"
                {...register("email", { required: true })}
              />
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mb-4">
                <span className="font-bold">Error:</span> Password is required
              </p>
            )}
            <div className="mb-6">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Enter your password"
                {...register("password", { required: true })}
              />
            </div>

            <div className=" text-center">
              <button
                type="submit"
                className="bg-blue-500 btn btn-wide  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Log In
              </button>
            </div>
            <SocialLogin></SocialLogin>
            <p className="p-5 text-xl text-center">
              New to this website?
              <Link to="/signup">
                <span className="text-sky-600"> Register here...</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
