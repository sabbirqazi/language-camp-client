import { Outlet } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar/NavBar";
import Footer from "../pages/Shared/Footer/Footer";

const LoginLayout = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="min-h-[calc(100vh-136px)]">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default LoginLayout;
