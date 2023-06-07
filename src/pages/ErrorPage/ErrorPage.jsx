/* eslint-disable no-unused-vars */

import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
 
  const { error } = useRouteError();
  return (
    <div>
      <section className="flex flex-col items-center h-screen p-16  text-red-900">
       <div className="w-96 h-96">
       <img
          src="https://img.freepik.com/free-vector/404-error-lost-space-concept-illustration_114360-7901.jpg?w=826&t=st=1684607379~exp=1684607979~hmac=4c0d95569aa7c48552ae2b20d4640dbad58e3ad470741c385b1deff26e08c124"
          alt=""
        />
       </div>
        <div className="my-container flex flex-col items-center justify-center px-5 mx-auto">
          <div className="max-w-md text-center">
            <p className="text-2xl font-semibold md:text-3xl mb-5">
              {error?.message}
            </p>
            <Link
              to="/"
              className="px-8 py-3 font-semibold rounded btn-main"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;