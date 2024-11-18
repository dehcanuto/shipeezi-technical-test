import { Link } from "react-router-dom";
import { BaseLogo } from "../../components";
import SignUp from "../../components/organisms/SignUp";

function SignUpPage() {
  return (
    <div>
      <nav className="absolute top-0 flex items-center py-4 px-8">
        <Link to="/signin">
          <BaseLogo />
        </Link>
      </nav>
      <div className="w-full min-h-screen bg-white flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
        <div className="w-full sm:max-w-lg p-5 mx-auto">
          <div className="space-y-3 text-center mb-6">
            <h2 className="text-5xl font-extrabold">Create Your Account</h2>
            <p>Welcome to CompanyHub! Sign up now to unlock exclusive content and features.</p>
          </div>
          <SignUp />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;