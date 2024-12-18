import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
   <>
    <nav class="container mx-auto flex justify-between bg-gray-400 items-center py-4 px-6"> 
      <ul class=" hidden lg:flex space-x-8">
        <li>
            <Link to="/" class="hover:text-gray-600 text-xl font-bold transition-colors duration-300">Home</Link>
        </li>
        <li>
            <Link to="/about" class="hover:text-gray-600 font-bold text-xl transition-colors duration-300">About</Link>
        </li>
        <li>
            <Link to="/contactus" class="hover:text-gray-600 text-xl font-bold transition-colors duration-300">ContactUs</Link>
        </li>
      </ul>
     </nav>

     <Outlet />
   </>
  )
};

export default Layout;
