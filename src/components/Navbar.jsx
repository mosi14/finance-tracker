import {useAuth0} from "@auth0/auth0-react";
import {useState} from "react";
import {LoginButton, LogoutButton} from './Buttons.jsx'
import {Link} from "react-router-dom";


function Navbar() {
    const {isAuthenticated} = useAuth0();
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className='bg-gray-800 m-0 p-0'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to='/' className="text-white text-2xl font-bold">
                            FinanceTracker
                        </Link>
                        <div className="hidden md:block ml-10 space-x-4">
                            <Link to="/dashboard"
                                  className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                                Dashboard
                            </Link>
                            <Link to="/transactions"
                                  className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                                Transactions
                            </Link>
                            <Link to="/budget"
                                  className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                                Budget
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="hidden md:block">
                            <Link to="/profile"
                                  className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                                Profile
                            </Link>
                            {isAuthenticated ? <LogoutButton/> : <LoginButton/>}
                        </div>
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
                            >
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    {isOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M6 18L18 6M6 6l12 12"/>
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M4 6h16M4 12h16M4 18h16"/>
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden">
                    <Link to="/" className="block px-4 py-2 text-gray-300 hover:bg-gray-700">
                        Dashboard
                    </Link>
                    <Link to="/transactions" className="block px-4 py-2 text-gray-300 hover:bg-gray-700">
                        Transactions
                    </Link>
                    <Link to="/budget" className="block px-4 py-2 text-gray-300 hover:bg-gray-700">
                        Budget
                    </Link>
                    <Link to="/profile" className="block px-4 py-2 text-gray-300 hover:bg-gray-700">
                        Profile
                    </Link>
                    <Link to="/logout" className="block px-4 py-2 text-gray-300 hover:bg-gray-700">
                        Logout
                    </Link>
                </div>
            )}
        </nav>
    )
        ;
}

export default Navbar;