import {useAuth0} from "@auth0/auth0-react";

export const LoginButton = () => {
    const {loginWithRedirect, isAuthenticated} = useAuth0();
    // if (!isAuthenticated) {
    return (
        <button className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => loginWithRedirect()}>
            Log In</button>

    );
    //  }
};


export const LogoutButton = () => {
    const {logout, isAuthenticated} = useAuth0();
    // if (isAuthenticated) {
    return (
            <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => logout({returnTo: window.location.origin})}
            >
                Log Out
            </button>
    );
    // }
};

