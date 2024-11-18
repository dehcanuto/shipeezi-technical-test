import React, { createContext, useContext, useState, ReactNode } from "react";

type AlertType = "success" | "error" | "info" | "warning";

interface Alert {
  message: string;
  type: AlertType;
}

interface AlertContextProps {
  alert: Alert | null;
  showAlert: (message: string, type: AlertType) => void;
  hideAlert: () => void;
}

const AlertContext = createContext<AlertContextProps | undefined>(undefined);

export const AlertProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [alert, setAlert] = useState<Alert | null>(null);

  const showAlert = (message: string, type: AlertType) => {
    setAlert({ message, type });
    setTimeout(hideAlert, 3000);
  };

  const hideAlert = () => setAlert(null);

  return (
    <AlertContext.Provider value={{ alert, showAlert, hideAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useAlert must be used within an AlertProvider");
  }
  return context;
};
