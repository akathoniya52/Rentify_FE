// App.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  

  return (
    <div className="relative min-h-screen flex justify-center items-center bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('https://source.unsplash.com/random/1600x900')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 max-w-md px-8 py-12 bg-white shadow-lg rounded-lg animate-fade-in-up">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">Welcome to Rentify</h1>
        <p className="text-gray-600 mb-6">Your one-stop platform for renting and finding properties.</p>
        <div className="flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300"
            onClick={() => {
              if (!user) {
                navigate('/login');
              } else {
                navigate('/home');
              }
            }}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
