import React from 'react';
import './loading.css'; // Import the CSS for keyframes

const Loading = () => {
  return (
    <div className="flex justify-center items-center w-24 h-24 gap-1.5">
      <span className="loading-span bg-blue-600"></span>
      <span className="loading-span bg-green-600 animation-delay-[-0.8s]"></span>
      <span className="loading-span bg-yellow-500 animation-delay-[-0.7s]"></span>
      <span className="loading-span bg-yellow-500 animation-delay-[-0.6s]"></span>
      <span className="loading-span bg-blue-500 animation-delay-[-0.5s]"></span>
    </div>
  );
}

export default Loading;
