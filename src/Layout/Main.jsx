import { Outlet } from "react-router-dom";

import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar";
//import NavBar from "../pages/Shared/NavBar/NavBar";

const Main = () => {
  return (
    <div className="">
      {/* <NavBar></NavBar> */}
      <Navbar />
      <div className="min-h-[calc(100vh-136px)]">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
