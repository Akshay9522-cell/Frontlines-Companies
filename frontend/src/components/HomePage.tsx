import React from 'react';

import { Link } from 'react-router-dom';
import slider1 from '../assets/images/slider1.png'




const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
 
      <section
  className="relative w-full h-[400px] md:h-[600px] bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${slider1})` }}
>
       
       

        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center md:items-start px-6 md:px-20 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-4">
            Welcome to Frontlines Media
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-6">
            Explore, filter, and manage companies with ease. Your data, at your fingertips.
          </p>
          <Link
            to="/companies"
            className="inline-block bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-blue-600 transition"
          >
            View Companies
          </Link>
        </div>
      </section>

  
      <section className="py-20 px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition">
          <div className="text-4xl text-blue-500 mb-4 mx-auto">🏢</div>
          <h2 className="text-2xl font-bold mb-2">120 Companies</h2>
          <p className="text-gray-600">Tracked and analyzed</p>
        </div>
        <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition">
          <div className="text-4xl text-green-500 mb-4 mx-auto">🏭</div>
          <h2 className="text-2xl font-bold mb-2">5 Industries</h2>
          <p className="text-gray-600">Diverse sectors</p>
        </div>
        <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition">
          <div className="text-4xl text-purple-500 mb-4 mx-auto">📍</div>
          <h2 className="text-2xl font-bold mb-2">30 Locations</h2>
          <p className="text-gray-600">Global reach</p>
        </div>
      </section>

    
      <section className="py-10 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Quick Actions</h2>
        <Link
          to="/companies"
          className="inline-block bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-blue-600 transition"
        >
          Go to Companies
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
