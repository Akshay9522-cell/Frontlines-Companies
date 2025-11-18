import React from 'react';
import { type Company } from '../types/company';
import { FaMapMarkerAlt, FaIndustry } from 'react-icons/fa';
import { motion } from 'framer-motion';
interface Props {
  company: Company;
}

const gradientMap: Record<string, string> = {
  IT: 'from-blue-400 to-purple-500',
  Healthcare: 'from-green-400 to-teal-500',
  Finance: 'from-yellow-400 to-orange-500',
  Environment: 'from-green-300 to-blue-400',
  Food: 'from-pink-400 to-red-500',
};

const CompanyCard: React.FC<Props> = ({ company }) => {
  const gradient = gradientMap[company.industry] || 'from-gray-400 to-gray-600';

  return (
      <motion.div
      initial={{ opacity: 0, y: 100 }}        
      animate={{ opacity: 1, y: 0 }}         
      transition={{ duration: 0.5 }}         
      className={`bg-gradient-to-br ${gradient} shadow-lg rounded-2xl p-6 text-white hover:shadow-2xl transform hover:-translate-y-2 w-full sm:w-1/2 lg:w-1/3`}
    >
      <h2 className="text-2xl font-bold mb-3">{company.name}</h2>

      <div className="flex items-center mb-2">
        <FaMapMarkerAlt className="mr-2 opacity-80" />
        <span>{company.location}</span>
      </div>

      <div className="flex items-center mb-4">
        <FaIndustry className="mr-2 opacity-80" />
        <span className="text-black text-xl rounded-full font-semibold">
          {company.industry}
        </span>
      </div>
    </motion.div>
  );
};

export default CompanyCard;
