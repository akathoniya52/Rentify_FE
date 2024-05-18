import React from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  const Navigate = useNavigate()
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="max-w-md px-8 py-12 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">Welcome to Rentify</h1>
        <p className="text-gray-600 mb-6">Your one-stop platform for renting and finding properties.</p>
        <div className="flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300" onClick={()=>{
            Navigate('/login')
          }}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
