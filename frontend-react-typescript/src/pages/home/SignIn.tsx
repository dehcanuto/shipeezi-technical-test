import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function SignInPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/dashboard");
  };

  return (
    <div>
      <h2>SignInPage</h2>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default SignInPage;