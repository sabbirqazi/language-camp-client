import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <div className="flex justify-center items-center h-96 bg-gradient-to-r from-cyan-500 to-blue-500 p-8">
      <div className="flex flex-col text-center gap-6 items-center">
        <h1 className="text-3xl text-white font-bold">
          Learn a new language <br /> with an online tutor
        </h1>
        <p className="text-md text-white">
        Let's work together. We can help to develop your business. <br />
           We provide the best service that comes with the best results.
        </p>
        <Link to="/instructors"  className="btn w-56 bg-white hover:bg-indigo-500 border-0 text-gray-900 font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default GetStarted;
