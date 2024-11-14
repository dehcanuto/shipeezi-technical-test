import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./components/organisms";

import SignInPage from './pages/home/SignIn';
import SignUpPage from './pages/home/SignUp';

import DashboardPage from './pages/gerencial/Dashboard';
import UsersListPage from './pages/gerencial/users/UsersList';
import UserDetailsPage from './pages/gerencial/users/UserDetails';
import NewUserPage from './pages/gerencial/users/NewUser';

function App() {  
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/signin" />} />

          {/* Public Routes */}
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />

          {/* Private Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/users"
            element={
              <ProtectedRoute>
                <UsersListPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/users/:id"
            element={
              <ProtectedRoute>
                <UserDetailsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/users/new"
            element={
              <ProtectedRoute>
                <NewUserPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;