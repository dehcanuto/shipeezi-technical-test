import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { UserUpdate } from '../models/user';

interface AuthContextType {
  isAuthenticated: boolean;
  user: UserUpdate | null;
  login: (data: LoginResponse) => void;
  logout: () => void;
}

export interface LoginResponse {
  access_token: string;
  user: UserUpdate;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserUpdate | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('user_info');
    const token = localStorage.getItem('access_token');

    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setIsAuthenticated(true);
        setUser(parsedUser);
      } catch (error) {
        console.error("Erro ao fazer parse do JSON:", error);
        localStorage.removeItem('user_info');
      }
    }
    
    setIsAuthenticated(!!token);
  }, []);

  const login = (data: LoginResponse) => {
    localStorage.setItem('user_info', JSON.stringify(data.user));
    localStorage.setItem('access_token', data.access_token);
    setUser(data.user);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user_info');
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
