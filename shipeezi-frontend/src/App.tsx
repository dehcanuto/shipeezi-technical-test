import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import { AlertProvider } from "./context/AlertContext";
import { ProtectedRoute } from "./components/organisms";

import SignInPage from './pages/home/SignIn';
import SignUpPage from './pages/home/SignUp';

import DashboardPage from './pages/gerencial/Dashboard';
import UsersListPage from './pages/gerencial/users/UsersList';
import UserDetailsPage from './pages/gerencial/users/UserDetails';
import NewUserPage from './pages/gerencial/users/NewUser';
import BaseAlert from "./components/atoms/Alert";

function App() {  
  return (
    <AuthProvider>
      <AlertProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/signin" />} />

            {/* Public Routes */}
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />

            {/* Private Routes */}
            <Route element={<ProtectedRoute redirectTo="/signin" />}>
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/users" element={<UsersListPage />} />
              <Route path="/user/:id" element={<UserDetailsPage />} />
              <Route path="/user/new" element={<NewUserPage />} />
            </Route>
          </Routes>
        </Router>
        <BaseAlert />
      </AlertProvider>
    </AuthProvider>
  );
};

export default App;