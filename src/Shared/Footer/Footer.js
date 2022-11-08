import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from '../../assets/logo/footerLogo.jpg';

const Footer = () => {
  return (
    <footer className="footer mt-20 p-10 bg-black text-neutral-content">
      <div>
        <img className="w-24" src={logo} alt="" />
        <p className="text-2xl">
          My Cake House
          <br />
          Providing reliable tech since 1992
        </p>
      </div>
      <div>
        <span className="footer-title">Social</span>
        <div className="grid grid-flow-col align-middle gap-4">
          <FaFacebook className=" btn btn-circle"></FaFacebook>
          <FaTwitter className=" btn btn-circle"></FaTwitter>
          <FaLinkedin className=" btn btn-circle"></FaLinkedin>
          <FaInstagram className=" btn btn-circle"></FaInstagram>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
