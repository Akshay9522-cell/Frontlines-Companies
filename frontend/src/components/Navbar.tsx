import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';

import { FaHome } from "react-icons/fa";
import { SiRelianceindustrieslimited } from "react-icons/si";
import { SiWikimediafoundation } from "react-icons/si";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>    <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
   
          <div className="flex-shrink-0 font-bold text-xl flex gap-2 items-center">
          <SiWikimediafoundation />   Frontlines Media
          </div>

           <div className="hidden md:flex gap-6 items-center">
       
          <Link
            to="/"
            className="flex items-center gap-2 hover:text-gray-200 transition"
          >
            <FaHome className="text-lg" />
            <span>Home</span>
          </Link>

          <Link
            to="/companies"
            className="flex items-center gap-2 hover:text-gray-200 transition"
          >
            <SiRelianceindustrieslimited className="text-lg" />
            <span>Companies</span>
          </Link>
        </div>

         
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 pb-4">
          <Link to="/" className="block py-2 text-white hover:bg-blue-400 rounded-md">Home</Link>
          <Link to="/companies" className="block py-2 text-white hover:bg-blue-400 rounded-md">Companies</Link>
        </div>
      )}
    </nav>
    
    </>

  );
};

export default Navbar;
