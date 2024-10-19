import Home from './pages/Home';
import Dashboard from './pages/Dashboard.jsx';
import Transactions from "./pages/Transaction.jsx";
import Budget from "./pages/Budget.jsx";
//import PrivateRoute from "./components/PrivateRoute.jsx";
import {useAuth0} from "@auth0/auth0-react";
import Navbar from "./components/Navbar.jsx";
import {BrowserRouter as Router, Navigate, Route, Routes,} from "react-router-dom";

function App() {
    const {isAuthenticated} = useAuth0();

    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    {/* Public Route */}
                    <Route path="/" element={<Home />} />

                    {/* Private Route */}
                    <Route path="/dashboard" element={isAuthenticated ? <Dashboard />: <Navigate to="/" />} />
                    <Route path="/transactions" element={isAuthenticated ? <Transactions />: <Navigate to="/" />} />
                    <Route path="/budget" element={isAuthenticated ? <Budget transactions={"transactions"}/>: <Navigate to="/" />} />
                </Routes>
            </Router>

        </>
    )
}

export default App
