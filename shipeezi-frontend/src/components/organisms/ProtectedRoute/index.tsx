import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';

interface ProtectedRouteProps {
  redirectTo?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ redirectTo = "/signin" }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} replace />;
};

export default ProtectedRoute;
