import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { BaseButton } from "../../atoms";
import FormField from "../../molecules/FormField";
import { handleLogin, handleRegister } from "../../../services/auth";
import { UserInfos } from "../../../models/user";
import { useAlert } from "../../../context/AlertContext";
import { LoginResponse, useAuth } from "../../../context/AuthContext";

const SignUp = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const { showAlert } = useAlert();
    const { register, handleSubmit } = useForm<FieldValues>();
    const [loading, setLoading] = useState<boolean>(false);
    
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        setLoading(true);
        await handleRegister(data as UserInfos)
            .then(async () => {
                showAlert("User registered successfully", "success");
                await handleLogin({ email: data.email, password: data.password })
                    .then((res: LoginResponse | null) => {
                        if (res) {
                            login(res);
                            navigate("/dashboard");
                        }
                    })
                    .catch(error => showAlert(error, "error"))
                    .finally(() => {
                        setLoading(false);
                    });
            })
            .catch(error => showAlert(error, "error"))
            .finally(() => setLoading(false));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <FormField
                name="fullName"
                label="Full name"
                placeholder="Enter your name"
                register={register} />
            <FormField
                name="username"
                label="Username"
                placeholder="@username"
                register={register} />
            <FormField
                type="email"
                name="email"
                label="Email"
                placeholder="Enter your email address"
                register={register} />
            <FormField
                type="password"
                name="password"
                label="Password"
                placeholder="Enter your password"
                register={register} />
            <BaseButton type="submit" label="Sign in" loading={loading} />
            <div className="flex items-center mx-auto">
                <input id="remember_me" type="checkbox" className="border border-gray-300 text-red-600 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50" />
                <label htmlFor="remember_me" className="ml-2 block text-sm leading-5 text-gray-900"> I agree to the terms and conditions</label>
            </div>
        </form>
    );
}

export default SignUp;