import React from 'react';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

const Header = () => {
  return (
    <header className="bg-primary-600 text-white rounded-t-lg p-6 shadow-lg flex items-center">
      <GlobeAltIcon className="h-8 w-8 mr-3" />
      <div>
        <h1 className="text-2xl md:text-3xl font-bold">Travel Buddy</h1>
        <p className="text-primary-200">Your AI-powered travel recommendation assistant</p>
      </div>
    </header>
  );
};

export default Header;