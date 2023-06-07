/* eslint-disable no-unused-vars */


import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const { googleSignIn } = useAuth(); // Login with google
  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <>
      <div className="flex flex-col my-5 gap-5 justify-center items-center">
       
      <button className="btn btn-circle text-center h-10 w-10" onClick={handleGoogleLogin}>
       Google
      </button>
      
      </div>
    </>
  );
};

export default SocialLogin;
