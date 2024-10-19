import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
            <div className="max-w-lg bg-white p-6 rounded-lg shadow-lg text-center">
                <h1 className="text-3xl font-bold mb-4">404 - Page Not Found</h1>
                <p className="text-gray-600 mb-6">
                    Oops! The page you are looking for doesn't exist.
                </p>
                <Link to="/">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                        Go Home
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;