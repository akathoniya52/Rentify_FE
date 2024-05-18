// ProfilePage.js
import React from 'react';

function ProfilePage({ user }) {
  return (
    
      <div className="bg-white rounded-lg shadow-lg p-6">
        <p className="text-gray-600 mb-4"><span className="font-semibold">First Name:</span> {user.first_name}</p>
        <p className="text-gray-600 mb-4"><span className="font-semibold">Last Name:</span> {user.last_name}</p>
        <p className="text-gray-600 mb-4"><span className="font-semibold">Email:</span> {user.email}</p>
        <p className="text-gray-600 mb-4"><span className="font-semibold">Phone Number:</span> {user.phone_number}</p>
        <p className="text-gray-600 mb-4"><span className="font-semibold">User Type:</span> {user.user_type}</p>
        <p className="text-gray-600 mb-4"><span className="font-semibold">Joined At:</span> {new Date(user.created_at).toLocaleString()}</p>
      </div>
  );
}

export default ProfilePage;
