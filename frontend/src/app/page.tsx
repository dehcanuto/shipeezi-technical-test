import { SignIn } from "@/components/organisms";

export default function LoginPage() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
      <div className="w-full sm:max-w-md p-5 mx-auto">
        <div className="space-y-3 mb-6">
          <h2 className="text-center text-5xl font-extrabold">Welcome back!</h2>
          <p>Sign in to access your dashboard and company details.</p>
        </div>
        <SignIn />
      </div>
    </div>
  );
}
