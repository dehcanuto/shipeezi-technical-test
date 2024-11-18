import { useAlert } from "../../../context/AlertContext";

const BaseAlert = () => {
  const { alert, hideAlert } = useAlert();

  if (!alert) return null;

  const alertStyles = {
    success: "bg-green-500 text-white",
    error: "bg-red-500 text-white",
    info: "bg-blue-500 text-white",
    warning: "bg-yellow-500 text-black",
  };

  return (
    <div
      className={`fixed top-16 right-8 pl-6 pr-16 py-2 font-bold rounded shadow-md transition-opacity ${alertStyles[alert.type]}`}
      role="alert"
      onClick={hideAlert}
    >
      {alert.message}
    </div>
  );
};

export default BaseAlert;
