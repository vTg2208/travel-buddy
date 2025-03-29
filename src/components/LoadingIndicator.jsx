import React from 'react';

const LoadingIndicator = () => {
  return (
    <div className="flex mb-4">
      <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center text-white flex-shrink-0">
        <svg className="h-6 w-6 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      </div>
      <div className="ml-3 bg-primary-100 rounded-lg rounded-tl-none p-3">
        <span className="loading-dots">Thinking</span>
      </div>
    </div>
  );
};

export default LoadingIndicator;