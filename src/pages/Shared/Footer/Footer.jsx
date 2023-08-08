import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-blue-100 text-base-content rounded bottom-0 ">
        <div className="grid grid-flow-col gap-4">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Enroll</a>
          <a className="link link-hover">Piracy</a>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            <a>
       <FaFacebookF className="h-6 w-6 text-blue-700"></FaFacebookF>
            </a>
            <a>
            <FaTwitter className="h-6 w-6 text-sky-500"></FaTwitter>
            </a>
            <a>
            <FaInstagram className="h-6 w-6 text-orange-700"></FaInstagram>
            </a>
          </div>
        </div>
        <div>
          <p>Copyright © 2023 - All right reserved by LangoCamp</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
