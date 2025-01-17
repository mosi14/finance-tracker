import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { isAuthenticated } = useAuth0();
    console.log("isAuthenticated");
    console.log(isAuthenticated);

    if (!isAuthenticated) {
        // If not authenticated, redirect to home page (or login page)
        return <Navigate to="/" />;
    }

    return children;
};

export default PrivateRoute;