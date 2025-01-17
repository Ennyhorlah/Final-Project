import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
   <>
    <nav className="container mx-auto flex justify-between items-center py-4 px-6"> 
      <ul className="hidden lg:flex space-x-6 " >
        <li>
            <Link to="/" className="hover:text-purple-600 text-lime-500 text-2xl font-bold transition-colors duration-300">Home</Link>
        </li>
        <li>
            <Link to="/about" className="hover:text-purple-600 text-lime-500 font-bold text-2xl transition-colors duration-300">About</Link>
        </li>
        <li>
            <Link to="/contactus" className="hover:text-purple-600 text-lime-500 text-2xl font-bold transition-colors duration-300">ContactUs</Link>
        </li>
      </ul>
     </nav>

     <Outlet />
   </>
  )
};

export default Layout;
