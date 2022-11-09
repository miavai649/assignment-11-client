import React, { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import { AuthContext } from "../../context/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then()
    .then()
  }

    const navItem = (
        <>
          <li className="font-semibold">
            <Link to="/">Home</Link>
          </li>
          <li className="font-semibold">
            <Link to="/blog">Blog</Link>
          </li>
          {
          user?.email && <>
            <li className="font-semibold">
            <Link to="/my-reviews">My Reviews</Link>
          </li>
            <li className="font-semibold">
            <Link to="/add-service">Add Service</Link>
          </li>
          </> 
          }
        </>
      );

  return (
    <div className="navbar h-20 my-5 shadow-transparent bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItem}
          </ul>
        </div>
          <img className="w-14 mx-5" src={logo} alt="" />
        <Link className="btn btn-ghost normal-case text-xl">
            MY Cake House
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{navItem}</ul>
      </div>
      <div className="navbar-end mr-14">
        {
                user?.uid ?
            <>
              <div className="tooltip tooltip-left" data-tip={user?.displayName}>
              <img className="w-9 rounded-full mr-5" src={user?.photoURL} alt="" />
                  </div>
                  <button onClick={handleLogOut} className="btn">Log out</button>
                  </>
            :
            <>
            <FaUser className="text-3xl text-purple-800 mr-5"></FaUser>
            <Link className="font-semibold btn" to="/login">Login</Link>
            </>
              }
      </div>
    </div>
  );
};

export default Header;
