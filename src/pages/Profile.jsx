import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
    const { user, logout } = useAuth0();

    return (
        <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
            <div className="max-w-md bg-white p-6 rounded-lg shadow-lg text-center">
                <h1 className="text-2xl font-bold mb-4">Profile</h1>
                <img src={user.picture} alt={user.name} className="rounded-full mb-4 mx-auto w-24 h-24" />
                <p className="text-lg font-semibold">{user.name}</p>
                <p className="text-gray-600 mb-4">{user.email}</p>
                <button
                    onClick={() => logout({ returnTo: window.location.origin })}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg"
                >
                    Log Out
                </button>
            </div>
        </div>
    );
};

export default Profile;