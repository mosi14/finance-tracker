// Home.js
import { useAuth0 } from '@auth0/auth0-react';
const Home = () => {
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Task Manager App</h1>
            <p className="text-gray-600 mb-8">Your simple solution for task management and organization.</p>

            {!isAuthenticated ? (
                <button
                    onClick={() => loginWithRedirect()}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
                >
                    Log In
                </button>
            ) : (
                <button
                    onClick={() => logout({ returnTo: window.location.origin })}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition"
                >
                    Log Out
                </button>
            )}
        </div>
    );
};

export default Home;

// Dashboard.js
import Profile from './Profile';

export const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <Profile />
        </div>
    );
};

