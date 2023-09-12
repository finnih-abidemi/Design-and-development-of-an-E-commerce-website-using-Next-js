import React from 'react';

export const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-900"></div>
    </div>
  );
};

export const ButtonLoading = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="animate-spin h-6 w-6 border-t-2 border-b-2 border-white rounded-full"></div>
    </div>
  );
};
