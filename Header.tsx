
import React from 'react';

const Header: React.FC = () => {
  return (
    <header 
      className="bg-gradient-to-br from-[#005F40] to-[#008080] text-white p-8 text-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20100%20100%22%3E%3Cpath%20d%3D%22M25%200%20L50%2025%20L25%2050%20L0%2025%20Z%22%20fill%3D%22%23ffffff%22%20opacity%3D%220.05%22%3E%3C/path%3E%3Cpath%20d%3D%22M75%200%20L100%2025%20L75%2050%20L50%2025%20Z%22%20fill%3D%22%23ffffff%22%20opacity%3D%220.05%22%3E%3C/path%3E%3Cpath%20d%3D%22M25%2050%20L50%2075%20L25%20100%20L0%2075%20Z%22%20fill%3D%22%23ffffff%22%20opacity%3D%220.05%22%3E%3C/path%3E%3Cpath%20d%3D%22M75%2050%20L100%2075%20L75%20100%20L50%2075%20Z%22%20fill%3D%22%23ffffff%22%20opacity%3D%220.05%22%3E%3C/path%3E%3C/svg%3E')] opacity-20"></div>
      <div className="relative z-10">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
          Sukuk al-Ijarah for Pakistan’s Automated Metering Infrastructure (AMI) Upgrade
        </h1>
        <p className="mt-2 text-xl md:text-2xl font-light text-yellow-300">10-Year Tenor</p>
      </div>
    </header>
  );
};

export default Header;
